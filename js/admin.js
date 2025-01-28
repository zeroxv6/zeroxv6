//
// class AdminDashboard {
//     constructor() {
//         // Check if user is authorized
//         if (!this.isAuthorized()) {
//             window.location.href = 'index.html';
//             return;
//         }
//
//         this.articleForm = document.getElementById('articleForm');
//         this.articlesList = document.getElementById('articlesList');
//         this.posts = [];
//         this.setupEventListeners();
//         this.loadArticles();
//         this.setupThemeToggle();
//     }
//
//     isAuthorized() {
//         // Simple check for demo purposes
//         // In production, implement proper authentication
//         return true; // or check for admin token
//     }
//
//     setupThemeToggle() {
//         const themeToggle = document.getElementById('theme-toggle');
//         const htmlElement = document.documentElement;
//         const savedTheme = localStorage.getItem('theme');
//
//         if (savedTheme === 'dark') {
//             htmlElement.classList.add('dark');
//         }
//
//         themeToggle.addEventListener('click', () => {
//             htmlElement.classList.toggle('dark');
//             localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
//         });
//     }
//
//     setupEventListeners() {
//         this.articleForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//             this.handleNewArticle();
//         });
//     }
//
//     loadArticles() {
//         const savedPosts = localStorage.getItem('blog-posts');
//         if (savedPosts) {
//             this.posts = JSON.parse(savedPosts);
//             this.renderArticles();
//         }
//     }
//
//     handleNewArticle() {
//         const title = document.getElementById('articleTitle').value;
//         const category = document.getElementById('articleCategory').value;
//         const content = document.getElementById('articleContent').value;
//
//         const newArticle = {
//             id: Date.now(),
//             title,
//             category,
//             content,
//             date: new Date().toISOString(),
//             author: '0xV6'
//         };
//
//         this.posts.unshift(newArticle);
//         this.saveArticles();
//         this.renderArticles();
//         this.showNotification('Article published successfully!');
//         this.articleForm.reset();
//     }
//
//     deleteArticle(id) {
//         const article = this.posts.find(post => post.id === id);
//         if (confirm(`Are you sure you want to delete the article "${article.title}"?`)) {
//             this.posts = this.posts.filter(post => post.id !== id);
//             this.saveArticles();
//             this.renderArticles();
//             this.showNotification('Article deleted successfully!');
//         }
//     }
//
//     saveArticles() {
//         localStorage.setItem('blog-posts', JSON.stringify(this.posts));
//     }
//
//     renderArticles() {
//         if (this.posts.length === 0) {
//             this.articlesList.innerHTML = `
//                 <div class="text-center py-8 text-gray-500 dark:text-gray-400">
//                     <i class="fas fa-newspaper text-4xl mb-2"></i>
//                     <p>No articles yet. Create your first article above!</p>
//                 </div>
//             `;
//             return;
//         }
//
//         this.articlesList.innerHTML = this.posts.map(post => `
//             <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
//                 <div class="flex justify-between items-start mb-2">
//                     <div>
//                         <h3 class="text-lg font-semibold text-gray-800 dark:text-white">${post.title}</h3>
//                         <span class="text-sm text-gray-500 dark:text-gray-400">
//                             ${new Date(post.date).toLocaleString()}
//                         </span>
//                     </div>
//                     <div class="flex space-x-2">
//                         <button onclick="admin.editArticle(${post.id})"
//                                 class="text-blue-500 hover:text-blue-600">
//                             <i class="fas fa-edit"></i>
//                         </button>
//                         <button onclick="admin.deleteArticle(${post.id})"
//                                 class="text-red-500 hover:text-red-600">
//                             <i class="fas fa-trash"></i>
//                         </button>
//                     </div>
//                 </div>
//                 <div class="article-preview text-gray-600 dark:text-gray-300 text-sm">
//                     ${post.content}
//                 </div>
//                 <div class="mt-2">
//                     <span class="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
//                         ${post.category}
//                     </span>
//                 </div>
//             </div>
//         `).join('');
//     }
//
//     showNotification(message, type = 'success') {
//         const notification = document.createElement('div');
//         notification.className = `fixed bottom-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
//             type === 'success' ? 'bg-green-500' : 'bg-red-500'
//         } text-white`;
//         notification.innerHTML = `
//             <div class="flex items-center">
//                 <i class="fas ${type === 'success' ? 'fa-check' : 'fa-exclamation-circle'} mr-2"></i>
//                 ${message}
//             </div>
//         `;
//
//         document.body.appendChild(notification);
//         setTimeout(() => notification.remove(), 3000);
//     }
//
//     editArticle(id) {
//         const article = this.posts.find(post => post.id === id);
//         if (article) {
//             document.getElementById('articleTitle').value = article.title;
//             document.getElementById('articleCategory').value = article.category;
//             document.getElementById('articleContent').value = article.content;
//
//             // Remove the old article
//             this.posts = this.posts.filter(post => post.id !== id);
//             this.saveArticles();
//             this.renderArticles();
//
//             // Scroll to form
//             this.articleForm.scrollIntoView({ behavior: 'smooth' });
//             this.showNotification('Edit the article and submit to update', 'info');
//         }
//     }
//
//     getCurrentUTCDateTime() {
//         const now = new Date();
//         return now.toISOString().slice(0, 19).replace('T', ' ');
//     }
//
//     validateArticle(title, category, content) {
//         if (title.trim().length < 3) {
//             this.showNotification('Title must be at least 3 characters long', 'error');
//             return false;
//         }
//         if (category.trim().length < 2) {
//             this.showNotification('Category must be at least 2 characters long', 'error');
//             return false;
//         }
//         if (content.trim().length < 10) {
//             this.showNotification('Content must be at least 10 characters long', 'error');
//             return false;
//         }
//         return true;
//     }
// }
//
// // Initialize Admin Dashboard
// const admin = new AdminDashboard();
//
// // Handle errors globally
// window.addEventListener('error', (event) => {
//     console.error('Unhandled error:', event.error);
//     admin.showNotification('An error occurred. Please try again.', 'error');
// });
//
// // Add autosave functionality for the form
// let autosaveTimeout;
// document.querySelectorAll('#articleForm input, #articleForm textarea').forEach(element => {
//     element.addEventListener('input', () => {
//         clearTimeout(autosaveTimeout);
//         autosaveTimeout = setTimeout(() => {
//             localStorage.setItem('article_draft', JSON.stringify({
//                 title: document.getElementById('articleTitle').value,
//                 category: document.getElementById('articleCategory').value,
//                 content: document.getElementById('articleContent').value,
//                 lastSaved: new Date().toISOString()
//             }));
//         }, 1000);
//     });
// });
//
// // Load draft if exists
// document.addEventListener('DOMContentLoaded', () => {
//     const draft = localStorage.getItem('article_draft');
//     if (draft) {
//         const draftData = JSON.parse(draft);
//         const lastSaved = new Date(draftData.lastSaved);
//         const now = new Date();
//         const hoursSinceLastSave = (now - lastSaved) / (1000 * 60 * 60);
//
//         // Only load draft if it's less than 24 hours old
//         if (hoursSinceLastSave < 24) {
//             document.getElementById('articleTitle').value = draftData.title || '';
//             document.getElementById('articleCategory').value = draftData.category || '';
//             document.getElementById('articleContent').value = draftData.content || '';
//             admin.showNotification('Draft loaded from last session', 'info');
//         } else {
//             localStorage.removeItem('article_draft');
//         }
//     }
// });
//
// // Add keyboard shortcuts
// document.addEventListener('keydown', (e) => {
//     // Ctrl/Cmd + S to save draft
//     if ((e.ctrlKey || e.metaKey) && e.key === 's') {
//         e.preventDefault();
//         const formData = {
//             title: document.getElementById('articleTitle').value,
//             category: document.getElementById('articleCategory').value,
//             content: document.getElementById('articleContent').value,
//             lastSaved: new Date().toISOString()
//         };
//         localStorage.setItem('article_draft', JSON.stringify(formData));
//         admin.showNotification('Draft saved successfully', 'success');
//     }
//
//     // Ctrl/Cmd + Enter to submit form
//     if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
//         e.preventDefault();
//         document.getElementById('articleForm').dispatchEvent(new Event('submit'));
//     }
// });
//
// // Add confirmation before leaving page with unsaved changes
// window.addEventListener('beforeunload', (e) => {
//     const form = document.getElementById('articleForm');
//     if (form.title.value || form.category.value || form.content.value) {
//         e.preventDefault();
//         e.returnValue = '';
//     }
// });

class AdminDashboard {
    constructor() {
        this.articleForm = document.getElementById('articleForm');
        this.articlesList = document.getElementById('articlesList');
        this.submitButton = this.articleForm.querySelector('button[type="submit"]');
        this.posts = [];
        this.editingId = null; // Track which article is being edited
        this.setupEventListeners();
        this.loadArticles();
        this.setupThemeToggle();
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark') {
            htmlElement.classList.add('dark');
        }

        themeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    setupEventListeners() {
        this.articleForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.editingId) {
                this.updateArticle();
            } else {
                this.handleNewArticle();
            }
        });
    }

    loadArticles() {
        const savedPosts = localStorage.getItem('blog-posts');
        if (savedPosts) {
            this.posts = JSON.parse(savedPosts);
            this.renderArticles();
        }
    }

    handleNewArticle() {
        const title = document.getElementById('articleTitle').value;
        const category = document.getElementById('articleCategory').value;
        const content = document.getElementById('articleContent').value;

        if (!this.validateArticle(title, category, content)) return;

        const newArticle = {
            id: Date.now(),
            title,
            category,
            content,
            date: new Date().toISOString(),
            author: '0xV6'
        };

        this.posts.unshift(newArticle);
        this.saveArticles();
        this.renderArticles();
        this.showNotification('Article published successfully!');
        this.articleForm.reset();
    }

    updateArticle() {
        const title = document.getElementById('articleTitle').value;
        const category = document.getElementById('articleCategory').value;
        const content = document.getElementById('articleContent').value;

        if (!this.validateArticle(title, category, content)) return;

        const index = this.posts.findIndex(post => post.id === this.editingId);
        if (index !== -1) {
            this.posts[index] = {
                ...this.posts[index],
                title,
                category,
                content,
                lastEdited: new Date().toISOString()
            };

            this.saveArticles();
            this.renderArticles();
            this.showNotification('Article updated successfully!');
            this.resetForm();
        }
    }

    resetForm() {
        this.editingId = null;
        this.articleForm.reset();
        this.submitButton.textContent = 'Publish Article';
        this.submitButton.classList.remove('bg-blue-500');
        this.submitButton.classList.add('bg-primary');
    }

    deleteArticle(id) {
        const article = this.posts.find(post => post.id === id);
        if (confirm(`Are you sure you want to delete the article "${article.title}"?`)) {
            this.posts = this.posts.filter(post => post.id !== id);
            this.saveArticles();
            this.renderArticles();
            this.showNotification('Article deleted successfully!');

            // If deleting the article being edited, reset the form
            if (this.editingId === id) {
                this.resetForm();
            }
        }
    }

    saveArticles() {
        localStorage.setItem('blog-posts', JSON.stringify(this.posts));
    }

    renderArticles() {
        if (this.posts.length === 0) {
            this.articlesList.innerHTML = `
                <div class="text-center py-8 text-gray-500 dark:text-gray-400">
                    <i class="fas fa-newspaper text-4xl mb-2"></i>
                    <p>No articles yet. Create your first article above!</p>
                </div>
            `;
            return;
        }

        this.articlesList.innerHTML = this.posts.map(post => `
            <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">${post.title}</h3>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                            ${new Date(post.date).toLocaleString()}
                        </span>
                        ${post.lastEdited ? `
                            <span class="text-sm text-gray-500 dark:text-gray-400 ml-2">
                                (Edited: ${new Date(post.lastEdited).toLocaleString()})
                            </span>
                        ` : ''}
                    </div>
                    <div class="flex space-x-2">
                        <button onclick="admin.editArticle(${post.id})" 
                                class="text-blue-500 hover:text-blue-600 transition-colors">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button onclick="admin.deleteArticle(${post.id})" 
                                class="text-red-500 hover:text-red-600 transition-colors">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="article-preview text-gray-600 dark:text-gray-300 text-sm">
                    ${post.content}
                </div>
                <div class="mt-2">
                    <span class="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        ${post.category}
                    </span>
                </div>
            </div>
        `).join('');
    }

    editArticle(id) {
        const article = this.posts.find(post => post.id === id);
        if (article) {
            this.editingId = id;
            document.getElementById('articleTitle').value = article.title;
            document.getElementById('articleCategory').value = article.category;
            document.getElementById('articleContent').value = article.content;

            // Change submit button appearance
            this.submitButton.textContent = 'Update Article';
            this.submitButton.classList.remove('bg-primary');
            this.submitButton.classList.add('bg-blue-500');

            // Scroll to form
            this.articleForm.scrollIntoView({ behavior: 'smooth' });
            this.showNotification('Editing article - Submit to update', 'info');
        }
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `fixed bottom-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
            type === 'success' ? 'bg-green-500' :
                type === 'error' ? 'bg-red-500' :
                    type === 'info' ? 'bg-blue-500' : 'bg-yellow-500'
        } text-white`;
        notification.innerHTML = `
            <div class="flex items-center">
                <i class="fas ${
            type === 'success' ? 'fa-check' :
                type === 'error' ? 'fa-exclamation-circle' :
                    type === 'info' ? 'fa-info-circle' : 'fa-exclamation-triangle'
        } mr-2"></i>
                ${message}
            </div>
        `;

        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }

    validateArticle(title, category, content) {
        if (title.trim().length < 3) {
            this.showNotification('Title must be at least 3 characters long', 'error');
            return false;
        }
        if (category.trim().length < 2) {
            this.showNotification('Category must be at least 2 characters long', 'error');
            return false;
        }
        if (content.trim().length < 10) {
            this.showNotification('Content must be at least 10 characters long', 'error');
            return false;
        }
        return true;
    }
}

// Initialize Admin Dashboard
const admin = new AdminDashboard();

// Add confirmation before leaving page with unsaved changes
window.addEventListener('beforeunload', (e) => {
    if (admin.editingId || document.getElementById('articleTitle').value ||
        document.getElementById('articleCategory').value ||
        document.getElementById('articleContent').value) {
        e.preventDefault();
        e.returnValue = '';
    }
});