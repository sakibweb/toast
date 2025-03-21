class Toast {
    constructor() {
        // Initialize properties (same as above)
        this.containers = {};
        this.defaultLocation = 'br';
        this.defaultType = 'auto';
        this.defaultTimeout = 5;

        this.typeClasses = {
            'info': 'bg-blue-500 text-white',
            'warning': 'bg-yellow-500 text-gray-900',
            'danger': 'bg-red-500 text-white',
            'error': 'bg-red-600 text-white',
            'success': 'bg-green-500 text-white',
            'light': 'bg-gray-100 text-gray-800',
            'dark': 'bg-gray-800 text-white',
            'auto': ''
        };

        this.locationClasses = {
            'tl': 'top-0 left-0 items-start',
            'top-left': 'top-0 left-0 items-start',
            'tc': 'top-0 left-0 right-0 items-start justify-center',
            'top-center': 'top-0 left-0 right-0 items-start justify-center',
            'tr': 'top-0 right-0 items-start justify-end',
            'top-right': 'top-0 right-0 items-start justify-end',
            'ml': 'top-0 bottom-0 left-0 items-center',
            'middle-left': 'top-0 bottom-0 left-0 items-center',
            'mc': 'top-0 bottom-0 left-0 right-0 items-center justify-center',
            'middle-center': 'top-0 bottom-0 left-0 right-0 items-center justify-center',
            'mr': 'top-0 bottom-0 right-0 items-center justify-end',
            'middle-right': 'top-0 bottom-0 right-0 items-center justify-end',
            'bl': 'bottom-0 left-0 items-end',
            'bottom-left': 'bottom-0 left-0 items-end',
            'bc': 'bottom-0 left-0 right-0 items-end justify-center',
            'bottom-center': 'bottom-0 left-0 right-0 items-end justify-center',
            'br': 'bottom-0 right-0 items-end justify-end',
            'bottom-right': 'bottom-0 right-0 items-end justify-end'
        };

        this.typeMapping = {
            'i': 'info',
            'w': 'warning',
            'd': 'danger',
            'e': 'error',
            's': 'success',
            'l': 'light',
            'dk': 'dark',
            'a': 'auto'
        };
    }

    getContainer(location) {
        if (!this.containers[location]) {
            const container = document.createElement('div');
            container.className = `fixed z-50 pointer-events-none flex flex-col gap-2 p-4 ${this.locationClasses[location] || this.locationClasses[this.defaultLocation]}`;
            document.body.appendChild(container);
            this.containers[location] = container;
        }
        return this.containers[location];
    }

    show(message, header = null, type = this.defaultType, location = this.defaultLocation, timeSec = this.defaultTimeout) {
        if (!message) return;
        const normalizedType = this.typeMapping[type] || type;
        const container = this.getContainer(location);
        const toastElement = this.createToastElement(message, header, normalizedType, timeSec);
        container.appendChild(toastElement);
    }

    createToastElement(message, header, type, timeSec) {
        const toast = document.createElement('div');
        toast.className = `relative pointer-events-auto rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden p-4 max-w-sm w-full transition-all duration-300 opacity-100 translate-x-0`;

        let themeClasses = this.typeClasses[type];
        if (type === 'auto') {
            themeClasses = document.body.classList.contains('dark') || document.documentElement.classList.contains('dark')
                ? this.typeClasses['dark']
                : this.typeClasses['light'];
        }
        toast.classList.add(...themeClasses.split(' '));

        const messageContainer = document.createElement('div');
        messageContainer.className = 'pr-8';
        if (header) {
            const headerElement = document.createElement('div');
            headerElement.className = 'font-semibold text-md mb-1';
            headerElement.textContent = header;
            messageContainer.appendChild(headerElement);
        }
        const messageElement = document.createElement('div');
        messageElement.className = 'text-sm';
        messageElement.textContent = message;
        messageContainer.appendChild(messageElement);

        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'absolute top-2 right-2 text-gray-400 hover:text-gray-500 focus:outline-none';
        closeButton.innerHTML = `<svg class="h-4 w-4 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
        closeButton.addEventListener('click', () => this.removeToast(toast));

        toast.appendChild(messageContainer);
        toast.appendChild(closeButton);

        let timer = setTimeout(() => this.removeToast(toast), timeSec * 1000);
        toast.addEventListener('mouseenter', () => clearTimeout(timer));
        toast.addEventListener('mouseleave', () => {
            timer = setTimeout(() => this.removeToast(toast), timeSec * 1000);
        });

        return toast;
    }

    removeToast(toast) {
        toast.classList.add('opacity-0', 'translate-x-full');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300); // Match transition duration
    }

    info(message, header = null, location = this.defaultLocation, timeSec = this.defaultTimeout) {
        this.show(message, header, 'info', location, timeSec);
    }
    warning(message, header = null, location = this.defaultLocation, timeSec = this.defaultTimeout) {
        this.show(message, header, 'warning', location, timeSec);
    }
    danger(message, header = null, location = this.defaultLocation, timeSec = this.defaultTimeout) {
        this.show(message, header, 'danger', location, timeSec);
    }
    error(message, header = null, location = this.defaultLocation, timeSec = this.defaultTimeout) {
        this.show(message, header, 'error', location, timeSec);
    }
    success(message, header = null, location = this.defaultLocation, timeSec = this.defaultTimeout) {
        this.show(message, header, 'success', location, timeSec);
    }
    light(message, header = null, location = this.defaultLocation, timeSec = this.defaultTimeout) {
        this.show(message, header, 'light', location, timeSec);
    }
    dark(message, header = null, location = this.defaultLocation, timeSec = this.defaultTimeout) {
        this.show(message, header, 'dark', location, timeSec);
    }
    auto(message, header = null, location = this.defaultLocation, timeSec = this.defaultTimeout) {
        this.show(message, header, 'auto', location, timeSec);
    }
}

const toast = new Toast();
window.toast = toast;
