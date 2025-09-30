function openModal(title, region, desc, imgSrc) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalRegion').textContent = '📍 ' + region;
            document.getElementById('modalDesc').textContent = desc;
            
            const modalImg = document.getElementById('modalImage');
            if (imgSrc && imgSrc !== '') {
                modalImg.src = imgSrc;
                modalImg.classList.add('show');
            } else {
                modalImg.classList.remove('show');
            }
            
            document.getElementById('modal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }

        window.onclick = function(e) {
            const modal = document.getElementById('modal');
            if (e.target === modal) closeModal();
        }

        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.background = 'rgba(10, 10, 10, 0.95)';
            } else {
                header.style.background = 'rgba(10, 10, 10, 0.8)';
            }
            lastScroll = currentScroll;
        });