class ArticleViewer {
    constructor() {
        this.articleContent = document.getElementById('article-content');
        this.setupThemeToggle();
        this.loadArticle();
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark') {
            htmlElement.classList.add('dark');
            htmlElement.classList.remove('light');
        }

        themeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    loadArticle() {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = urlParams.get('id');

        // Static articles data
        const articles = {
            '1': {
                title: 'Getting Started with Python',
                content: `Python is a versatile programming language that's great for beginners. In this article, we'll explore the basics of Python programming.

                Python's simplicity and readability make it an excellent choice for those new to programming. Here are some key features:

                1. Easy to Read Syntax
                Python uses indentation and simple syntax that closely resembles English, making it intuitive to understand.

                2. Large Standard Library
                Python comes with a comprehensive standard library, providing tools for various tasks.

                3. Active Community
                The Python community is vast and supportive, offering numerous resources and packages.

                Let's look at a simple example:

                print("Hello, World!")
                name = input("What's your name? ")
                print(f"Nice to meet you, {name}!")

                This is just the beginning of what you can do with Python. Stay tuned for more advanced topics!`,
                author: '0xV6',
                date: '2025-01-28 15:38:51',
                category: 'Programming'
            },
            '2': {
                title: 'Understanding Linux Basics',
                content: `Linux is a powerful operating system that's essential for developers. Learn the fundamental concepts and commands.

                Linux is an open-source operating system that powers much of the internet's infrastructure. Here are some essential commands:

                1. Navigation Commands:
                - cd: Change directory
                - ls: List files
                - pwd: Print working directory

                2. File Operations:
                - touch: Create empty file
                - mkdir: Create directory
                - rm: Remove files
                - cp: Copy files

                3. System Information:
                - top: View system processes
                - df: Check disk space
                - free: Check memory usage

                Understanding these basics will help you become more proficient in Linux administration.`,
                author: '0xV6',
                date: '2025-01-28 15:38:51',
                category: 'Linux'
            }
        };

        if (!articleId || !articles[articleId]) {
            this.showError('Article not found');
            return;
        }

        const article = articles[articleId];
        document.title = `${article.title} - Portfolio`;
        this.renderArticle(article);
    }

    renderArticle(article) {
        this.articleContent.innerHTML = `
            <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">${article.title}</h1>
            <div class="flex flex-wrap items-center justify-between mb-8">
                <div class="flex items-center space-x-4 mb-2 sm:mb-0">
                    <span class="text-gray-600 dark:text-gray-300">
                        <i class="fas fa-user mr-2"></i>${article.author}
                    </span>
                    <span class="text-gray-600 dark:text-gray-300">
                        <i class="fas fa-calendar mr-2"></i>${article.date}
                    </span>
                </div>
                <span class="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                    ${article.category}
                </span>
            </div>
            <div class="prose prose-lg dark:prose-invert max-w-none">
                ${this.formatContent(article.content)}
            </div>
        `;
    }

    formatContent(content) {
        return content
            .split('\n')
            .filter(paragraph => paragraph.trim() !== '')
            .map(paragraph => `<p class="mb-4 text-gray-700 dark:text-gray-300">${paragraph.trim()}</p>`)
            .join('');
    }

    showError(message) {
        this.articleContent.innerHTML = `
            <div class="text-center py-12">
                <i class="fas fa-exclamation-circle text-4xl text-red-500 mb-4"></i>
                <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    ${message}
                </h2>
                <button onclick="window.location.href = 'index.html'" 
                        class="text-primary hover:text-secondary transition-colors">
                    Return to Home
                </button>
            </div>
        `;
    }
}

// Initialize ArticleViewer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ArticleViewer();
});