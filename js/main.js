/**
 * Aqua Line - Master Flow & Precision Plumbing
 * Interactive Functionality & WhatsApp Dispatch Integration
 */

const AQUALINE_WHATSAPP_NUMBER = '923046902756';

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initNavbarScroll();
    initEstimator();
    initContactForm();
    initFaqAccordion();
});

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.remove('opacity-0', '-translate-y-4');
                mobileMenu.classList.add('opacity-100', 'translate-y-0');
            }, 10);
        });

        const closeMenu = () => {
            mobileMenu.classList.remove('opacity-100', 'translate-y-0');
            mobileMenu.classList.add('opacity-0', '-translate-y-4');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 250);
        };

        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', closeMenu);
        }

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
}

/**
 * Navbar Dynamic Scroll Styling
 */
function initNavbarScroll() {
    const navbar = document.querySelector('header nav');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('bg-black/90', 'shadow-[0_10px_30px_rgba(0,0,0,0.8)]');
            navbar.classList.remove('bg-black/60');
        } else {
            navbar.classList.add('bg-black/60');
            navbar.classList.remove('bg-black/90', 'shadow-[0_10px_30px_rgba(0,0,0,0.8)]');
        }
    });
}

/**
 * Interactive Plumbing Cost & Dispatch Estimator
 */
function initEstimator() {
    const serviceSelect = document.getElementById('estimator-service');
    const propertySelect = document.getElementById('estimator-property');
    const urgencySelect = document.getElementById('estimator-urgency');
    const estimatePriceEl = document.getElementById('estimator-price-range');
    const estimateDispatchEl = document.getElementById('estimator-dispatch-time');
    const estimateWhatsappBtn = document.getElementById('estimator-whatsapp-btn');

    if (!serviceSelect || !propertySelect || !urgencySelect || !estimatePriceEl || !estimateWhatsappBtn) {
        return;
    }

    const rates = {
        'drain': { baseMin: 45, baseMax: 95, time: 'Within 45 Mins' },
        'leak': { baseMin: 60, baseMax: 130, time: 'Immediate 30 Mins' },
        'heater': { baseMin: 85, baseMax: 220, time: 'Same-Day Service' },
        'burst': { baseMin: 90, baseMax: 190, time: 'Immediate 25 Mins' },
        'fixtures': { baseMin: 50, baseMax: 120, time: 'Scheduled Flexible' },
        'commercial': { baseMin: 150, baseMax: 350, time: 'Priority 30 Mins' }
    };

    const multipliers = {
        'residential': 1.0,
        'luxury': 1.25,
        'commercial': 1.6
    };

    const urgencyMultipliers = {
        'standard': 1.0,
        'urgent': 1.15,
        'emergency': 1.35
    };

    function calculateEstimate() {
        const serviceKey = serviceSelect.value;
        const propKey = propertySelect.value;
        const urgencyKey = urgencySelect.value;

        const serviceData = rates[serviceKey] || rates['drain'];
        const propMult = multipliers[propKey] || 1.0;
        const urgMult = urgencyMultipliers[urgencyKey] || 1.0;

        const minPrice = Math.round(serviceData.baseMin * propMult * urgMult);
        const maxPrice = Math.round(serviceData.baseMax * propMult * urgMult);

        estimatePriceEl.textContent = `$${minPrice} - $${maxPrice}`;
        
        let dispatchText = serviceData.time;
        if (urgencyKey === 'emergency') {
            dispatchText = '🚨 Emergency: 20-35 Mins';
        }
        if (estimateDispatchEl) {
            estimateDispatchEl.textContent = dispatchText;
        }

        const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
        const propertyName = propertySelect.options[propertySelect.selectedIndex].text;
        const urgencyName = urgencySelect.options[urgencySelect.selectedIndex].text;

        const message = `Hello Aqua Line Plumbing! 🚰\n\nI used your instant website estimator:\n• Service: ${serviceName}\n• Property Type: ${propertyName}\n• Urgency: ${urgencyName}\n• Estimated Rate: $${minPrice} - $${maxPrice}\n\nPlease confirm availability and dispatch technician to my address.`;

        const encodedMessage = encodeURIComponent(message);
        estimateWhatsappBtn.href = `https://wa.me/${AQUALINE_WHATSAPP_NUMBER}?text=${encodedMessage}`;
    }

    serviceSelect.addEventListener('change', calculateEstimate);
    propertySelect.addEventListener('change', calculateEstimate);
    urgencySelect.addEventListener('change', calculateEstimate);

    // Initial calculation
    calculateEstimate();
}

/**
 * Contact & Instant Booking Form Handler
 */
function initContactForm() {
    const contactForm = document.getElementById('plumbing-contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('contact-name')?.value || 'Valued Client';
        const phone = document.getElementById('contact-phone')?.value || 'Not provided';
        const address = document.getElementById('contact-address')?.value || 'Not provided';
        const service = document.getElementById('contact-service')?.value || 'General Plumbing';
        const urgency = document.getElementById('contact-urgency')?.value || 'Standard';
        const notes = document.getElementById('contact-notes')?.value || 'None';

        const text = `🚨 *Aqua Line Plumbing Service Request* 🚨\n\n👤 *Client Name:* ${name}\n📞 *Phone:* ${phone}\n📍 *Address/Area:* ${address}\n🔧 *Requested Service:* ${service}\n⏱ *Urgency Level:* ${urgency}\n📝 *Problem Description:* ${notes}\n\n_Sent via Aqua Line Official Portal_`;

        const encoded = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${AQUALINE_WHATSAPP_NUMBER}?text=${encoded}`;

        // Show feedback modal or banner
        const feedbackEl = document.getElementById('contact-success-msg');
        if (feedbackEl) {
            feedbackEl.classList.remove('hidden');
        }

        // Open WhatsApp directly in new window
        window.open(whatsappUrl, '_blank');
    });
}

/**
 * FAQ Accordion Toggle
 */
function initFaqAccordion() {
    const faqButtons = document.querySelectorAll('.faq-toggle');
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.faq-icon');
            const isOpen = !content.classList.contains('hidden');

            // Close all
            document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
            document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

            if (!isOpen) {
                content.classList.remove('hidden');
                if (icon) icon.classList.add('rotate-180');
            }
        });
    });
}
