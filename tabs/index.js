tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        orbitron: ['Orbitron', 'sans-serif'],
                        inter: ['Inter', 'sans-serif'],
                        manrope: ['Manrope', 'sans-serif']
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'slide-up': 'slideUp 0.7s ease-out forwards',
                        'slide-right': 'slideRight 0.7s ease-out forwards',
                        'fade-in': 'fadeIn 0.8s ease-out forwards',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        },
                        slideUp: {
                            '0%': { transform: 'translateY(50px)', opacity: 0 },
                            '100%': { transform: 'translateY(0)', opacity: 1 },
                        },
                        slideRight: {
                            '0%': { transform: 'translateX(-50px)', opacity: 0 },
                            '100%': { transform: 'translateX(0)', opacity: 1 },
                        },
                        fadeIn: {
                            '0%': { opacity: 0 },
                            '100%': { opacity: 1 },
                        }
                    }
                }
            }
        }
// Initialize AOS Animation Library
        document.addEventListener('DOMContentLoaded', function() {
            AOS.init({
                duration: 800,
                once: false,
                mirror: true,
                easing: 'ease-out-cubic'
            });
            
            // Initialize Lucide Icons
            lucide.createIcons();
            
            // Scroll animations for reveal elements
            const revealElements = document.querySelectorAll('.reveal');
            
            function revealOnScroll() {
                revealElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementTop < windowHeight - 100) {
                        element.classList.add('active');
                    } else {
                        element.classList.remove('active');
                    }
                });
            }
            
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Initial check on load
            
            // Animate skill progress bars
            const skillBars = document.querySelectorAll('.skill-progress');
            
            function animateSkillBars() {
                skillBars.forEach(bar => {
                    const targetWidth = bar.getAttribute('data-width');
                    bar.style.width = targetWidth;
                    bar.style.transition = 'width 1.5s ease-out';
                });
            }
            
            setTimeout(animateSkillBars, 500);
            
            // Contact form submission handler for Netlify
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    // Netlify will handle the form submission automatically
                    // You can still add custom behavior here if needed
                    
                    // If you want to handle the form submission with AJAX instead of a page refresh:
                    /*
                    e.preventDefault();
                    const formData = new FormData(contactForm);
                    
                    fetch("/", {
                        method: "POST",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: new URLSearchParams(formData).toString()
                    })
                        .then(() => {
                            // Show success message
                            alert('Thank you for your message! I will get back to you soon.');
                            contactForm.reset();
                        })
                        .catch(error => {
                            // Show error message
                            alert('Oops! There was a problem submitting your form: ' + error);
                        });
                    */
                });
            }

            // Particle background effect
            function setupParticleBackground() {
                const canvas = document.getElementById('particle-background');
                const ctx = canvas.getContext('2d');
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                
                const particles = [];
                const particleCount = 100;
                
                for (let i = 0; i < particleCount; i++) {
                    particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        radius: Math.random() * 2 + 1,
                        color: i % 2 === 0 ? 'rgba(34, 211, 238, 0.5)' : 'rgba(232, 121, 249, 0.5)',
                        speedX: Math.random() * 0.5 - 0.25,
                        speedY: Math.random() * 0.5 - 0.25
                    });
                }
                
                function drawParticles() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    
                    particles.forEach(particle => {
                        ctx.beginPath();
                        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                        ctx.fillStyle = particle.color;
                        ctx.fill();
                        
                        // Update particle position
                        particle.x += particle.speedX;
                        particle.y += particle.speedY;
                        
                        // Boundary checking
                        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
                    });
                    
                    requestAnimationFrame(drawParticles);
                }
                
                drawParticles();
                
                // Resize canvas when window size changes
                window.addEventListener('resize', function() {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                });
            }
            
            // Setup THREE.js background
            function setup3DBackground() {
                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                const renderer = new THREE.WebGLRenderer({ alpha: true });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setClearColor(0x000000, 0);
                document.getElementById('particle-background').appendChild(renderer.domElement);
                
                // Create stars
                const starsGeometry = new THREE.BufferGeometry();
                const starsMaterial = new THREE.PointsMaterial({
                    color: 0xffffff,
                    size: 0.5,
                    transparent: true,
                    opacity: 0.7
                });
                
                const starsVertices = [];
                for (let i = 0; i < 3000; i++) {
                    const x = (Math.random() - 0.5) * 2000;
                    const y = (Math.random() - 0.5) * 2000;
                    const z = (Math.random() - 0.5) * 2000;
                    starsVertices.push(x, y, z);
                }
                
                starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
                const stars = new THREE.Points(starsGeometry, starsMaterial);
                scene.add(stars);
                
                camera.position.z = 5;
                
                function animate() {
                    requestAnimationFrame(animate);
                    stars.rotation.x += 0.0002;
                    stars.rotation.y += 0.0001;
                    renderer.render(scene, camera);
                }
                
                animate();
                
                // Resize handler
                window.addEventListener('resize', function() {
                    const width = window.innerWidth;
                    const height = window.innerHeight;
                    renderer.setSize(width, height);
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                });
            }
            
            // Choose which background effect to use
            try {
                setupSpaceBackground();
            } catch (e) {
                console.log('THREE.js background failed, falling back to basic particles');
                setupParticleBackground();
            }

            // Enhanced space background with planets, stars and galaxies
            function setupSpaceBackground() {
                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
                const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setClearColor(0x000000, 0);
                document.getElementById('particle-background').appendChild(renderer.domElement);
                
                // Create stars
                const starsGeometry = new THREE.BufferGeometry();
                const starsMaterial = new THREE.PointsMaterial({
                    color: 0xffffff,
                    size: 0.7,
                    transparent: true,
                    opacity: 0.8
                });
                
                const starsVertices = [];
                for (let i = 0; i < 5000; i++) {
                    const x = (Math.random() - 0.5) * 2000;
                    const y = (Math.random() - 0.5) * 2000;
                    const z = (Math.random() - 0.5) * 2000;
                    starsVertices.push(x, y, z);
                }
                
                starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
                const stars = new THREE.Points(starsGeometry, starsMaterial);
                scene.add(stars);
                
                // Create planets
                const planets = [];
                const planetColors = [
                    0x22d3ee, // cyan
                    0xe879f9, // fuchsia
                    0x34d399, // emerald
                    0xfbbf24, // amber
                    0xf87171, // red
                    0xa78bfa  // violet
                ];
                
                for (let i = 0; i < 8; i++) {
                    const geometry = new THREE.SphereGeometry(Math.random() * 10 + 5, 32, 32);
                    const material = new THREE.MeshBasicMaterial({ 
                        color: planetColors[i % planetColors.length],
                        transparent: true,
                        opacity: 0.7
                    });
                    const planet = new THREE.Mesh(geometry, material);
                    
                    // Position planets at different distances
                    const distance = Math.random() * 800 + 400;
                    const angle = Math.random() * Math.PI * 2;
                    planet.position.x = Math.sin(angle) * distance;
                    planet.position.y = (Math.random() - 0.5) * 300;
                    planet.position.z = Math.cos(angle) * distance;
                    
                    // Add rings to some planets
                    if (Math.random() > 0.6) {
                        const ringGeometry = new THREE.RingGeometry(
                            planet.geometry.parameters.radius * 1.3, 
                            planet.geometry.parameters.radius * 1.7, 
                            32
                        );
                        const ringMaterial = new THREE.MeshBasicMaterial({ 
                            color: 0xffffff,
                            side: THREE.DoubleSide,
                            transparent: true,
                            opacity: 0.3
                        });
                        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
                        ring.rotation.x = Math.PI / 2;
                        planet.add(ring);
                    }
                    
                    scene.add(planet);
                    planets.push({
                        mesh: planet,
                        rotationSpeed: Math.random() * 0.01,
                        orbitSpeed: Math.random() * 0.0005 + 0.0002,
                        orbitRadius: distance,
                        orbitAngle: angle
                    });
                }
                
                // Create galaxies with particle systems
                for (let i = 0; i < 3; i++) {
                    const galaxyGeometry = new THREE.BufferGeometry();
                    const galaxyParticles = [];
                    const galaxyColor = new THREE.Color(planetColors[Math.floor(Math.random() * planetColors.length)]);
                    const galaxyMaterial = new THREE.PointsMaterial({
                        size: 1.2,
                        transparent: true,
                        opacity: 0.7,
                        vertexColors: true
                    });
                    
                    const galaxySize = Math.random() * 200 + 100;
                    const galaxyPosition = new THREE.Vector3(
                        (Math.random() - 0.5) * 1500,
                        (Math.random() - 0.5) * 1500,
                        (Math.random() - 0.5) * 1500
                    );
                    
                    for (let j = 0; j < 1000; j++) {
                        const radius = Math.random() * galaxySize;
                        const angle = Math.random() * Math.PI * 2;
                        const x = galaxyPosition.x + Math.sin(angle) * radius;
                        const y = galaxyPosition.y + (Math.random() - 0.5) * 2 * galaxySize;
                        const z = galaxyPosition.z + Math.cos(angle) * radius;
                        galaxyParticles.push(x, y, z);
                    }
                    
                    // Color gradient from center to edge
                    const colors = [];
                    for (let j = 0; j < galaxyParticles.length / 3; j++) {
                        const radius = Math.sqrt(galaxyParticles[j * 3] ** 2 + galaxyParticles[j * 3 + 1] ** 2 + galaxyParticles[j * 3 + 2] ** 2);
                        
                        // Color gradient from center to edge
                        const colorFactor = radius / galaxySize;
                        const color = galaxyColor.clone();
                        color.lerp(new THREE.Color(0xffffff), colorFactor);
                        colors.push(color.r, color.g, color.b);
                    }
                    
                    galaxyGeometry.setAttribute('position', new THREE.Float32BufferAttribute(galaxyParticles, 3));
                    galaxyGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
                    
                    const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
                    scene.add(galaxy);
                }
                
                camera.position.z = 1000;
                
                function animate() {
                    requestAnimationFrame(animate);
                    
                    // Rotate stars slowly
                    stars.rotation.x += 0.0001;
                    stars.rotation.y += 0.0001;
                    
                    // Animate planets
                    planets.forEach(planet => {
                        // Self rotation
                        planet.mesh.rotation.y += planet.rotationSpeed;
                        
                        // Orbit movement
                        planet.orbitAngle += planet.orbitSpeed;
                        planet.mesh.position.x = Math.sin(planet.orbitAngle) * planet.orbitRadius;
                        planet.mesh.position.z = Math.cos(planet.orbitAngle) * planet.orbitRadius;
                    });
                    
                    // Slowly move camera to create parallax effect
                    const time = Date.now() * 0.0001;
                    camera.position.x = Math.sin(time) * 10;
                    camera.position.y = Math.cos(time) * 10;
                    
                    renderer.render(scene, camera);
                }
                
                animate();
                
                // Resize handler
                window.addEventListener('resize', function() {
                    const width = window.innerWidth;
                    const height = window.innerHeight;
                    renderer.setSize(width, height);
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                });
            }
        });
document.addEventListener('DOMContentLoaded', function() {
        // Mobile menu functionality
        const mobileMenuButton = document.querySelector('.md\\:hidden');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMenuButton = document.getElementById('close-mobile-menu');
        
        // Open menu when hamburger is clicked
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.remove('translate-x-full');
            document.body.classList.add('overflow-hidden');
        });
        
        // Close menu when X is clicked
        closeMenuButton.addEventListener('click', function() {
            mobileMenu.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
        });
        
        // Close menu when a link is clicked
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('translate-x-full');
                document.body.classList.remove('overflow-hidden');
            });
        });
    });