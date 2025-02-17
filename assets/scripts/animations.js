document.addEventListener('DOMContentLoaded', () => {
    const mainCard = document.querySelector('.main-card');
    const cardBg = document.querySelector('.card-bg');

    if (!mainCard || !cardBg) return;

    mainCard.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = mainCard.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        gsap.to(cardBg, {
            x: x * 60,
            y: y * 60,
            rotation: x * 15,
            ease: "power2.out",
            duration: 1.2
        });
        
        gsap.to(mainCard, {
            rotationY: x * 8,
            rotationX: y * 8,
            ease: "power2.out",
            duration: 1.2
        });
    });

    mainCard.addEventListener('mouseleave', () => {
        gsap.to([cardBg, mainCard], {
            x: 0,
            y: 0,
            rotation: 0,
            rotationY: 0,
            rotationX: 0,
            ease: "power2.out",
            duration: 1
        });
    });
});

const cardContent = document.querySelector('.card-content1');
gsap.to(cardContent, {
    y: y * -20,
    x: x * -20,
    ease: "power2.out",
    duration: 1.2
});

document.querySelectorAll('.sub-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / card.offsetWidth - 0.5;
        const y = (e.clientY - rect.top) / card.offsetHeight - 0.5;
        
        gsap.to(card, {
            rotationY: x * 10,
            rotationX: y * 10,
            scale: 1.02,
            ease: "power2.out",
            duration: 0.8
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            ease: "power2.out",
            duration: 0.8
        });
    });
});