// class PortfolioManager {
//     constructor() {
//         this.postsContainer = document.getElementById('posts-container');
//         this.projectsContainer = document.getElementById('projects-container');
//         this.initEventListeners();
//         this.loadProjects();
//     }
//
//     // Particle Generation Method
//     createParticles() {
//         const particleContainer = document.getElementById('particle-container');
//         particleContainer.innerHTML = ''; // Clear existing particles
//
//         for (let i = 0; i < 50; i++) {
//             const particle = document.createElement('div');
//             particle.classList.add(
//                 'particle',
//                 'absolute',
//                 'bg-gradient-to-r',
//                 'from-primary-light',
//                 'to-secondary-light',
//                 'rounded-full'
//             );
//
//             // Randomize particle properties
//             const size = Math.random() * 20 + 5;
//             particle.style.width = `${size}px`;
//             particle.style.height = `${size}px`;
//             particle.style.left = `${Math.random() * 100}%`;
//             particle.style.top = `${Math.random() * 100}%`;
//             particle.style.animationDelay = `${Math.random() * 5}s`;
//             particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
//
//             particleContainer.appendChild(particle);
//         }
//     }
//
//     // Projects Section Methods
//     async loadProjects() {
//         try {
//             const username = '0xV6'; // Your GitHub username
//             const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=6`);
//
//             if (!response.ok) {
//                 throw new Error('Failed to fetch projects');
//             }
//
//             const projects = await response.json();
//
//             if (this.projectsContainer) {
//                 this.projectsContainer.innerHTML = projects
//                     .map(project => this.createProjectCard(project))
//                     .join('');
//
//                 // Initialize intersection observer for projects
//                 this.observeProjects();
//             }
//         } catch (error) {
//             console.error('Error loading projects:', error);
//             if (this.projectsContainer) {
//                 this.projectsContainer.innerHTML = `
//                     <div class="col-span-full text-center text-gray-500 dark:text-gray-400">
//                         <i class="fas fa-exclamation-circle text-4xl mb-4"></i>
//                         <p>Unable to load projects at this time.</p>
//                     </div>
//                 `;
//             }
//         }
//     }
//
//     createProjectCard(project) {
//         const languageColors = {
//             JavaScript: '#f1e05a',
//             Python: '#3572A5',
//             Java: '#b07219',
//             HTML: '#e34c26',
//             CSS: '#563d7c',
//             TypeScript: '#2b7489',
//             PHP: '#4F5D95',
//             Ruby: '#701516',
//             'C++': '#f34b7d',
//             C: '#555555',
//             Swift: '#ffac45',
//             Go: '#00ADD8'
//         };
//
//         return `
//             <div class="project-card opacity-0 transform translate-y-8" data-project>
//                 <div class="flex justify-between items-start mb-4">
//                     <h3 class="text-xl font-semibold">
//                         <a href="${project.html_url}"
//                            target="_blank"
//                            rel="noopener noreferrer"
//                            class="hover:text-primary transition-colors">
//                             ${project.name}
//                         </a>
//                     </h3>
//                     <div class="flex items-center space-x-3">
//                         <span class="text-sm flex items-center">
//                             <i class="fas fa-star mr-1"></i>${project.stargazers_count}
//                         </span>
//                     </div>
//                 </div>
//                 <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm h-12 overflow-hidden">
//                     ${project.description || 'No description available'}
//                 </p>
//                 <div class="flex items-center justify-between">
//                     <div class="flex items-center">
//                         ${project.language ? `
//                             <span class="project-language-dot"
//                                   style="background-color: ${languageColors[project.language] || '#666'}">
//                             </span>
//                             <span class="text-sm">${project.language}</span>
//                         ` : ''}
//                     </div>
//                     <div class="flex items-center space-x-4">
//                         <a href="${project.html_url}/network/members"
//                            class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">
//                             <i class="fas fa-code-branch mr-1"></i>${project.forks_count}
//                         </a>
//                         <span class="text-sm text-gray-600 dark:text-gray-400">
//                             <i class="fas fa-eye mr-1"></i>${project.watchers_count}
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }
//
//     observeProjects() {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.remove('opacity-0', 'translate-y-8');
//                     entry.target.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-500', 'ease-out');
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, {
//             threshold: 0.1,
//             rootMargin: '50px'
//         });
//
//         document.querySelectorAll('[data-project]').forEach(project => {
//             observer.observe(project);
//         });
//     }
//
//     // Theme Management
//     setupThemeToggle() {
//         const themeToggle = document.getElementById('theme-toggle');
//         const htmlElement = document.documentElement;
//
//         // Check for saved theme preference or system preference
//         const savedTheme = localStorage.getItem('theme');
//         const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
//
//         // Initial theme setup
//         if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
//             htmlElement.classList.add('dark');
//             htmlElement.classList.remove('light');
//         } else {
//             htmlElement.classList.add('light');
//             htmlElement.classList.remove('dark');
//         }
//
//         // Theme toggle functionality
//         themeToggle.addEventListener('click', () => {
//             if (htmlElement.classList.contains('light')) {
//                 htmlElement.classList.remove('light');
//                 htmlElement.classList.add('dark');
//                 localStorage.setItem('theme', 'dark');
//             } else {
//                 htmlElement.classList.remove('dark');
//                 htmlElement.classList.add('light');
//                 localStorage.setItem('theme', 'light');
//             }
//         });
//
//         // Listen for system theme changes
//         prefersDarkScheme.addEventListener('change', (e) => {
//             if (!localStorage.getItem('theme')) {
//                 if (e.matches) {
//                     htmlElement.classList.remove('light');
//                     htmlElement.classList.add('dark');
//                 } else {
//                     htmlElement.classList.remove('dark');
//                     htmlElement.classList.add('light');
//                 }
//             }
//         });
//     }
//
//     // Initialize Event Listeners
//     initEventListeners() {
//         window.addEventListener('resize', () => this.createParticles());
//         this.setupThemeToggle();
//
//         // Initialize particles on load
//         document.addEventListener('DOMContentLoaded', () => {
//             this.createParticles();
//         });
//     }
// }
//
// // Initialize the Portfolio Manager
// const portfolio = new PortfolioManager();
// // Initialize the Post Manager
// const postManager = new PostManager();
//
// // Error Handling
// window.addEventListener('error', (event) => {
//     console.error('Unhandled error:', event.error);
//     // Optionally implement error tracking here
// });
// class PostManager {
//     constructor() {
//         this.postsContainer = document.getElementById('posts-container');
//         this.posts = [];
//         this.loadSavedPosts();
//     }
//
//
//
//     loadSavedPosts() {
//         const savedPosts = localStorage.getItem('blog-posts');
//         if (savedPosts) {
//             this.posts = JSON.parse(savedPosts);
//             this.renderPosts();
//         }
//     }
//
//     savePosts() {
//         localStorage.setItem('blog-posts', JSON.stringify(this.posts));
//     }
//
//     addPost(post) {
//         const newPost = {
//             ...post,
//             id: Date.now(),
//             date: post.date || new Date().toISOString(),
//             author: '0xV6'
//         };
//
//         this.posts.unshift(newPost);
//         this.savePosts();
//         this.renderPosts();
//     }
//
//     removePost(postId) {
//         // Find the post index
//         const index = this.posts.findIndex(post => post.id === postId);
//
//         if (index !== -1) {
//             // Remove the post
//             this.posts.splice(index, 1);
//             // Save updated posts
//             this.savePosts();
//             // Re-render posts
//             this.renderPosts();
//             return true;
//         }
//         return false;
//     }
//
//     createPostElement(post) {
//         const date = new Date(post.date).toLocaleString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//         });
//
//         return `
//             <div class="post-card p-6 rounded-lg shadow-soft hover:shadow-vibrant"
//                  style="transition: all 0.3s ease;">
//                 <div class="flex justify-between items-start mb-4">
//                     <h3 class="text-xl font-semibold text-primary mb-2 cursor-pointer hover:text-secondary"
//                         onclick="window.location.href='article.html?id=${post.id}'">
//                         ${post.title}
//                     </h3>
//                     <button class="text-red-500 hover:text-red-700 transition-colors p-2"
//                             onclick="postManager.handleDeletePost(${post.id})">
//                         <i class="fas fa-trash"></i>
//                     </button>
//                 </div>
//                 <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 cursor-pointer"
//                    onclick="window.location.href='article.html?id=${post.id}'">
//                     ${post.content}
//                 </p>
//                 <div class="flex justify-between items-center">
//                     <span class="text-sm text-gray-500 dark:text-gray-400">Posted on ${date}</span>
//                     <span class="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs">
//                         ${post.category}
//                     </span>
//                 </div>
//             </div>
//         `;
//     }
//
//     handleDeletePost(postId) {
//         if (confirm('Are you sure you want to delete this article?')) {
//             if (this.removePost(postId)) {
//                 // Show success message
//                 this.showNotification('Article deleted successfully!', 'success');
//             } else {
//                 // Show error message
//                 this.showNotification('Failed to delete article.', 'error');
//             }
//         }
//     }
//
//     showNotification(message, type = 'success') {
//         // Create notification element
//         const notification = document.createElement('div');
//         notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
//             type === 'success' ? 'bg-green-500' : 'bg-red-500'
//         } text-white`;
//         notification.innerHTML = `
//             <div class="flex items-center">
//                 <i class="fas ${type === 'success' ? 'fa-check' : 'fa-exclamation-circle'} mr-2"></i>
//                 ${message}
//             </div>
//         `;
//
//         // Add to document
//         document.body.appendChild(notification);
//
//         // Remove after 3 seconds
//         setTimeout(() => {
//             notification.remove();
//         }, 3000);
//     }
//
//     renderPosts() {
//         if (this.postsContainer) {
//             if (this.posts.length === 0) {
//                 this.postsContainer.innerHTML = `
//                     <div class="text-center py-8">
//                         <i class="fas fa-newspaper text-4xl text-gray-400 mb-4"></i>
//                         <p class="text-gray-500 dark:text-gray-400">No articles yet.</p>
//                     </div>
//                 `;
//             } else {
//                 this.postsContainer.innerHTML = this.posts
//                     .map(post => this.createPostElement(post))
//                     .join('');
//             }
//         }
//     }
// }
//


class PortfolioManager {
    constructor() {
        this.projectsContainer = document.getElementById('projects-container');
        this.initEventListeners();
        this.loadProjects();
    }

    // Particle Generation Method
    createParticles() {
        const particleContainer = document.getElementById('particle-container');
        particleContainer.innerHTML = ''; // Clear existing particles

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add(
                'particle',
                'absolute',
                'bg-gradient-to-r',
                'from-primary-light',
                'to-secondary-light',
                'rounded-full'
            );

            // Randomize particle properties
            const size = Math.random() * 20 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particle.style.animationDuration = `${Math.random() * 10 + 10}s`;

            particleContainer.appendChild(particle);
        }
    }

    // Projects Section Methods
    async loadProjects() {
        try {
            const username = '0xV6'; // Your GitHub username
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=6`);

            if (!response.ok) {
                throw new Error('Failed to fetch projects');
            }

            const projects = await response.json();

            if (this.projectsContainer) {
                this.projectsContainer.innerHTML = projects
                    .map(project => this.createProjectCard(project))
                    .join('');

                // Initialize intersection observer for projects
                this.observeProjects();
            }
        } catch (error) {
            console.error('Error loading projects:', error);
            if (this.projectsContainer) {
                this.projectsContainer.innerHTML = `
                    <div class="col-span-full text-center text-gray-500 dark:text-gray-400">
                        <i class="fas fa-exclamation-circle text-4xl mb-4"></i>
                        <p>Unable to load projects at this time.</p>
                    </div>
                `;
            }
        }
    }

    // createProjectCard(project) {
    //     const languageColors = {
    //         JavaScript: '#f1e05a',
    //         Python: '#3572A5',
    //         Java: '#b07219',
    //         HTML: '#e34c26',
    //         CSS: '#563d7c',
    //         TypeScript: '#2b7489',
    //         PHP: '#4F5D95',
    //         Ruby: '#701516',
    //         'C++': '#f34b7d',
    //         C: '#555555',
    //         Swift: '#ffac45',
    //         Go: '#00ADD8'
    //     };
    //
    //     return `
    //         <div class="project-card opacity-0 transform translate-y-8" data-project>
    //             <div class="flex justify-between items-start mb-4">
    //                 <h3 class="text-xl font-semibold">
    //                     <a href="${project.html_url}"
    //                        target="_blank"
    //                        rel="noopener noreferrer"
    //                        class="hover:text-primary transition-colors">
    //                         ${project.name}
    //                     </a>
    //                 </h3>
    //                 <div class="flex items-center space-x-3">
    //                     <span class="text-sm flex items-center">
    //                         <i class="fas fa-star mr-1"></i>${project.stargazers_count}
    //                     </span>
    //                 </div>
    //             </div>
    //             <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm h-12 overflow-hidden">
    //                 ${project.description || 'No description available'}
    //             </p>
    //             <div class="flex items-center justify-between">
    //                 <div class="flex items-center">
    //                     ${project.language ? `
    //                         <span class="project-language-dot"
    //                               style="background-color: ${languageColors[project.language] || '#666'}">
    //                         </span>
    //                         <span class="text-sm">${project.language}</span>
    //                     ` : ''}
    //                 </div>
    //                 <div class="flex items-center space-x-4">
    //                     <a href="${project.html_url}/network/members"
    //                        class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">
    //                         <i class="fas fa-code-branch mr-1"></i>${project.forks_count}
    //                     </a>
    //                     <span class="text-sm text-gray-600 dark:text-gray-400">
    //                         <i class="fas fa-eye mr-1"></i>${project.watchers_count}
    //                     </span>
    //                 </div>
    //             </div>
    //         </div>
    //     `;
    // }
    createProjectCard(project) {
        const languageColors = {
            JavaScript: '#f1e05a',
            Python: '#3572A5',
            Java: '#b07219',
            HTML: '#e34c26',
            CSS: '#563d7c',
            TypeScript: '#2b7489',
            PHP: '#4F5D95',
            Ruby: '#701516',
            'C++': '#f34b7d',
            C: '#555555',
            Swift: '#ffac45',
            Go: '#00ADD8'
        };

        const currentDate = new Date('2025-01-28 12:40:51');
        const lastUpdated = new Date(project.updated_at);
        const timeDiff = Math.abs(currentDate - lastUpdated);
        const daysAgo = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        return `
        <div class="project-card opacity-0 transform translate-y-8" 
             data-project
             onclick="window.open('${project.html_url}', '_blank')"
             role="button"
             tabindex="0"
             onkeypress="(e) => { if (e.key === 'Enter') window.open('${project.html_url}', '_blank') }">
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-semibold">
                    <span class="project-title">
                        ${project.name}
                    </span>
                </h3>
                <div class="flex items-center space-x-3">
                    <span class="text-sm flex items-center project-metadata">
                        <i class="fas fa-star mr-1"></i>${project.stargazers_count}
                    </span>
                </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm h-12 overflow-hidden">
                ${project.description || 'No description available'}
            </p>
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    ${project.language ? `
                        <span class="project-language-dot" 
                              style="background-color: ${languageColors[project.language] || '#666'}">
                        </span>
                        <span class="text-sm project-metadata">${project.language}</span>
                    ` : ''}
                </div>
                <div class="flex items-center space-x-4">
                    <a href="${project.html_url}/network/members" 
                       class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary independent-click"
                       onclick="event.stopPropagation()">
                        <i class="fas fa-code-branch mr-1"></i>${project.forks_count}
                    </a>
                    <span class="text-sm text-gray-600 dark:text-gray-400 project-metadata">
                        <i class="fas fa-eye mr-1"></i>${project.watchers_count}
                    </span>
                </div>
            </div>
            <div class="mt-2 text-xs text-gray-500 dark:text-gray-400">
                <span class="project-metadata">
                    <i class="fas fa-clock mr-1"></i>
                    ${daysAgo === 0 ? 'Updated today' :
            daysAgo === 1 ? 'Updated yesterday' :
                `Updated ${daysAgo} days ago`}
                </span>
            </div>
        </div>
    `;
    }

// Add this to your PortfolioManager class
    observeProjects() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    entry.target.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-500', 'ease-out');

                    // Add hover effect class after animation
                    setTimeout(() => {
                        entry.target.classList.add('hover:shadow-lg', 'hover:-translate-y-2');
                    }, 500);

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        document.querySelectorAll('[data-project]').forEach(project => {
            observer.observe(project);

            // Add keyboard navigation
            project.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    window.open(project.getAttribute('onclick').slice(13, -9), '_blank');
                }
            });
        });
    }

    observeProjects() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    entry.target.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-500', 'ease-out');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        document.querySelectorAll('[data-project]').forEach(project => {
            observer.observe(project);
        });
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        const savedTheme = localStorage.getItem('theme');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

        if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
            htmlElement.classList.add('dark');
            htmlElement.classList.remove('light');
        }

        themeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
        });

        prefersDarkScheme.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                htmlElement.classList.toggle('dark', e.matches);
            }
        });
    }

    initEventListeners() {
        window.addEventListener('resize', () => this.createParticles());
        this.setupThemeToggle();

        document.addEventListener('DOMContentLoaded', () => {
            this.createParticles();
        });
    }
}

// class PostManager {
//     constructor() {
//         this.postsContainer = document.getElementById('posts-container');
//         this.posts = [];
//         this.loadSavedPosts();
//
//         // Add storage event listener for real-time updates
//         window.addEventListener('storage', (e) => {
//             if (e.key === 'blog-posts') {
//                 this.loadSavedPosts();
//             }
//         });
//     }
//
//     loadSavedPosts() {
//         const savedPosts = localStorage.getItem('blog-posts');
//         if (savedPosts) {
//             this.posts = JSON.parse(savedPosts);
//             this.renderPosts();
//         }
//     }
//
//     // In PostManager class in main.js, update the createPostElement method:
//     createPostElement(post) {
//         const date = new Date(post.date).toLocaleString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//         });
//
//         return `
//         <div class="post-card p-6 rounded-lg shadow-soft hover:shadow-vibrant cursor-pointer"
//              style="transition: all 0.3s ease;"
//              onclick="window.location.href='article.html?id=${post.id}'">
//             <div class="flex justify-between items-start mb-4">
//                 <h3 class="text-xl font-semibold text-primary mb-2">
//                     ${post.title}
//                 </h3>
//             </div>
//             <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
//                 ${post.content}
//             </p>
//             <div class="flex justify-between items-center">
//                 <span class="text-sm text-gray-500 dark:text-gray-400">Posted on ${date}</span>
//                 <span class="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs">
//                     ${post.category}
//                 </span>
//             </div>
//         </div>
//     `;
//     }
//
//     renderPosts() {
//         if (this.postsContainer) {
//             if (this.posts.length === 0) {
//                 this.postsContainer.innerHTML = `
//                     <div class="text-center py-8">
//                         <i class="fas fa-newspaper text-4xl text-gray-400 mb-4"></i>
//                         <p class="text-gray-500 dark:text-gray-400">No articles yet.</p>
//                     </div>
//                 `;
//             } else {
//                 this.postsContainer.innerHTML = this.posts
//                     .map(post => this.createPostElement(post))
//                     .join('');
//             }
//         }
//     }
// }

// Initialize both managers
const portfolio = new PortfolioManager();
// const postManager = new PostManager();
