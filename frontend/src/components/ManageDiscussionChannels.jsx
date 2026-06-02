import React, { useState, useEffect } from 'react';
import { MessageSquare, Save, Trash2, Plus, ExternalLink, Loader2 } from 'lucide-react';
import { getAllDiscussionGroups, upsertDiscussionGroup, deleteDiscussionGroup } from '../services/discussion';

const ManageDiscussionChannels = () => {
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Form state for new/edit
  const [form, setForm] = useState({ gradeLevel: '9', telegramLink: '' });

  const fetchGroups = async () => {
    try {
      setIsLoading(true);
      const res = await getAllDiscussionGroups();
      setGroups(res.data.data || []);
    } catch (err) {
      setError('Failed to load discussion groups.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.telegramLink) return;

    try {
      setIsSaving(true);
      setError('');
      setSuccess('');
      await upsertDiscussionGroup(form);
      setSuccess(`Telegram link for Grade ${form.gradeLevel} updated!`);
      setForm({ gradeLevel: '9', telegramLink: '' });
      fetchGroups();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save group.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this discussion group link?')) return;
    try {
      await deleteDiscussionGroup(id);
      setGroups(groups.filter(g => g._id !== id));
      setSuccess('Group deleted successfully.');
    } catch (err) {
      setError('Failed to delete group.');
    }
  };

  return (
    <div className="mx-auto w-full max-w-[1440px] animate-in fade-in duration-500 space-y-8">
      {/* Header Card */}
      <div className="rounded-2xl border border-outline/10 bg-white p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-primary-container/10 rounded-2xl flex items-center justify-center text-primary-container shadow-inner">
              <MessageSquare size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-on-surface tracking-tight">Telegram Group Management</h2>
              <p className="text-on-surface-variant text-sm font-medium mt-1">
                Configure official discussion groups for each grade level.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Manage Form */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-outline/10 bg-white p-6 shadow-sm sticky top-24">
            <h3 className="text-lg font-bold text-on-surface mb-6 flex items-center gap-2">
              <Plus size={20} className="text-primary-container" />
              Add / Update Link
            </h3>

            <form onSubmit={handleSave} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant px-1">Grade Level</label>
                <select
                  value={form.gradeLevel}
                  onChange={(e) => setForm({ ...form, gradeLevel: e.target.value })}
                  className="w-full bg-surface border border-outline/20 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-container/20 outline-none transition-all"
                >
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant px-1">Telegram Invite Link</label>
                <input
                  type="url"
                  placeholder="https://t.me/joinchat/..."
                  value={form.telegramLink}
                  onChange={(e) => setForm({ ...form, telegramLink: e.target.value })}
                  className="w-full bg-surface border border-outline/20 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary-container/20 outline-none transition-all"
                  required
                />
              </div>

              {error && <p className="text-xs font-bold text-error bg-error/5 p-3 rounded-lg border border-error/10">{error}</p>}
              {success && <p className="text-xs font-bold text-primary-container bg-primary-container/5 p-3 rounded-lg border border-primary-container/10">{success}</p>}

              <button
                type="submit"
                disabled={isSaving}
                className="w-full bg-primary-container text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-primary-container/20 hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                Update Channel Link
              </button>
            </form>
          </div>
        </div>

        {/* Channels List */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-outline/10 bg-white p-6 shadow-sm min-h-[400px]">
            <h3 className="text-lg font-bold text-on-surface mb-6">Active Channels</h3>

            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map(i => <div key={i} className="h-20 bg-surface rounded-xl animate-pulse" />)}
              </div>
            ) : groups.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center opacity-60">
                <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mb-4">
                  <MessageSquare size={32} className="text-on-surface-variant" />
                </div>
                <p className="text-sm font-bold">No telegram channels configured yet.</p>
                <p className="text-xs">Use the form on the left to add links for each grade.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {groups.map((group) => (
                  <div key={group._id} className="group flex items-center justify-between p-5 rounded-2xl border border-outline/5 bg-surface hover:border-primary-container/20 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl border border-outline/10 flex items-center justify-center font-black text-primary-container text-lg shadow-sm">
                        {group.gradeLevel}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-black text-on-surface">Grade {group.gradeLevel} Discussion</p>
                        <p className="text-xs text-on-surface-variant truncate max-w-[200px] md:max-w-xs">{group.telegramLink}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={group.telegramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white border border-outline/10 rounded-lg text-primary-container hover:bg-primary-container hover:text-white transition-colors shadow-sm"
                        title="Test Link"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <button
                        onClick={() => setForm({ gradeLevel: group.gradeLevel, telegramLink: group.telegramLink })}
                        className="p-2.5 bg-white border border-outline/10 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors shadow-sm"
                        title="Edit"
                      >
                        <Save size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(group._id)}
                        className="p-2.5 bg-white border border-outline/10 rounded-lg text-error hover:bg-error hover:text-white transition-colors shadow-sm"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageDiscussionChannels;
