let currentStep = 1;
let currentView = 'landing-page';
let currentDashboardView = 'overview';
let userProfile = {};
let selectedSkills = [];
let selectedInterests = [];
let savedInternships = [];
let applications = [];

// Sample internship data
const internships = [
    {
        id: 1,
        title: "Frontend Developer Intern",
        company: "TechCorp Solutions",
        location: "Mumbai",
        workMode: "Hybrid",
        stipend: "₹25,000",
        duration: "6 months",
        skills: ["React", "JavaScript", "HTML/CSS"],
        description: "Join our dynamic frontend team to build cutting-edge web applications using React and modern JavaScript frameworks.",
        responsibilities: [
            "Develop responsive web interfaces using React.js",
            "Collaborate with designers to implement UI/UX designs",
            "Write clean, maintainable code following best practices",
            "Participate in code reviews and team meetings"
        ],
        requirements: [
            "Strong knowledge of JavaScript, HTML, and CSS",
            "Experience with React.js framework",
            "Understanding of responsive design principles",
            "Good communication skills"
        ],
        benefits: [
            "Mentorship from senior developers",
            "Flexible working hours",
            "Learning and development opportunities",
            "Potential for full-time conversion"
        ],
        applicationDeadline: "2024-02-15",
        contactPerson: "Sarah Johnson",
        contactEmail: "sarah.johnson@techcorp.com",
        posted: "2024-01-15",
        applicants: 45,
        domain: "technology"
    },
    {
        id: 2,
        title: "Data Science Intern",
        company: "DataFlow Analytics",
        location: "Bangalore",
        workMode: "Remote",
        stipend: "₹30,000",
        duration: "4 months",
        skills: ["Python", "Machine Learning", "SQL"],
        description: "Work with our data science team to analyze large datasets and build predictive models for business insights.",
        responsibilities: [
            "Analyze complex datasets using Python and SQL",
            "Build and validate machine learning models",
            "Create data visualizations and reports",
            "Present findings to stakeholders"
        ],
        requirements: [
            "Proficiency in Python programming",
            "Knowledge of machine learning algorithms",
            "Experience with SQL databases",
            "Strong analytical and problem-solving skills"
        ],
        benefits: [
            "Work with cutting-edge ML technologies",
            "Remote work flexibility",
            "Access to premium learning resources",
            "Networking opportunities with industry experts"
        ],
        applicationDeadline: "2024-02-20",
        contactPerson: "Dr. Rajesh Kumar",
        contactEmail: "rajesh.kumar@dataflow.com",
        posted: "2024-01-18",
        applicants: 67,
        domain: "technology"
    },
    {
        id: 3,
        title: "UI/UX Design Intern",
        company: "DesignHub Studio",
        location: "Delhi",
        workMode: "On-site",
        stipend: "₹20,000",
        duration: "3 months",
        skills: ["Figma", "Adobe XD", "User Research"],
        description: "Create intuitive and beautiful user experiences for web and mobile applications in our award-winning design studio.",
        responsibilities: [
            "Design user interfaces for web and mobile apps",
            "Conduct user research and usability testing",
            "Create wireframes, prototypes, and design systems",
            "Collaborate with developers and product managers"
        ],
        requirements: [
            "Proficiency in design tools like Figma or Adobe XD",
            "Understanding of UX principles and methodologies",
            "Portfolio showcasing design projects",
            "Creative thinking and attention to detail"
        ],
        benefits: [
            "Work on diverse client projects",
            "Mentorship from award-winning designers",
            "Access to premium design tools",
            "Portfolio development support"
        ],
        applicationDeadline: "2024-02-10",
        contactPerson: "Priya Sharma",
        contactEmail: "priya.sharma@designhub.com",
        posted: "2024-01-20",
        applicants: 89,
        domain: "design"
    },
    {
        id: 4,
        title: "Digital Marketing Intern",
        company: "GrowthHack Marketing",
        location: "Hyderabad",
        workMode: "Hybrid",
        stipend: "₹18,000",
        duration: "5 months",
        skills: ["Social Media", "Google Analytics", "Content Marketing"],
        description: "Drive digital marketing campaigns and help businesses grow their online presence through innovative marketing strategies.",
        responsibilities: [
            "Manage social media accounts and campaigns",
            "Create engaging content for various platforms",
            "Analyze campaign performance using analytics tools",
            "Assist in SEO and SEM activities"
        ],
        requirements: [
            "Knowledge of social media platforms",
            "Basic understanding of digital marketing concepts",
            "Good writing and communication skills",
            "Analytical mindset"
        ],
        benefits: [
            "Hands-on experience with marketing tools",
            "Opportunity to work with diverse clients",
            "Performance-based incentives",
            "Digital marketing certification support"
        ],
        applicationDeadline: "2024-02-25",
        contactPerson: "Amit Patel",
        contactEmail: "amit.patel@growthhack.com",
        posted: "2024-01-22",
        applicants: 34,
        domain: "marketing"
    },
    {
        id: 5,
        title: "Backend Developer Intern",
        company: "CloudTech Systems",
        location: "Pune",
        workMode: "Remote",
        stipend: "₹28,000",
        duration: "6 months",
        skills: ["Node.js", "MongoDB", "AWS"],
        description: "Build scalable backend systems and APIs for cloud-based applications serving millions of users worldwide.",
        responsibilities: [
            "Develop RESTful APIs using Node.js",
            "Design and optimize database schemas",
            "Implement cloud infrastructure on AWS",
            "Write unit tests and documentation"
        ],
        requirements: [
            "Strong programming skills in JavaScript/Node.js",
            "Experience with databases (MongoDB/MySQL)",
            "Understanding of cloud platforms (AWS preferred)",
            "Knowledge of API design principles"
        ],
        benefits: [
            "Work with modern cloud technologies",
            "Flexible remote work environment",
            "AWS certification support",
            "Opportunity to work on high-scale systems"
        ],
        applicationDeadline: "2024-03-01",
        contactPerson: "Vikram Singh",
        contactEmail: "vikram.singh@cloudtech.com",
        posted: "2024-01-25",
        applicants: 52,
        domain: "technology"
    },
    {
        id: 6,
        title: "Financial Analyst Intern",
        company: "InvestSmart Capital",
        location: "Mumbai",
        workMode: "On-site",
        stipend: "₹22,000",
        duration: "4 months",
        skills: ["Excel", "Financial Modeling", "Data Analysis"],
        description: "Analyze financial markets and investment opportunities while learning from experienced financial professionals.",
        responsibilities: [
            "Conduct financial analysis and market research",
            "Build financial models and forecasts",
            "Prepare investment reports and presentations",
            "Support portfolio management activities"
        ],
        requirements: [
            "Strong analytical and mathematical skills",
            "Proficiency in Excel and financial modeling",
            "Knowledge of financial markets and instruments",
            "Attention to detail and accuracy"
        ],
        benefits: [
            "Exposure to financial markets",
            "Mentorship from CFA charterholders",
            "Bloomberg terminal access",
            "Networking with finance professionals"
        ],
        applicationDeadline: "2024-02-18",
        contactPerson: "Neha Gupta",
        contactEmail: "neha.gupta@investsmart.com",
        posted: "2024-01-28",
        applicants: 78,
        domain: "finance"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    populateInternships();
    updateProgressBar();
}

function setupEventListeners() {
    // Skill selection
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('selected');
            const skill = this.dataset.skill;
            if (this.classList.contains('selected')) {
                if (!selectedSkills.includes(skill)) {
                    selectedSkills.push(skill);
                }
            } else {
                selectedSkills = selectedSkills.filter(s => s !== skill);
            }
        });
    });

    // Interest selection
    document.querySelectorAll('.interest-card').forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('selected');
            const interest = this.dataset.interest;
            if (this.classList.contains('selected')) {
                if (!selectedInterests.includes(interest)) {
                    selectedInterests.push(interest);
                }
            } else {
                selectedInterests = selectedInterests.filter(i => i !== interest);
            }
        });
    });

    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterInternships();
        });
    }

    // Filter functionality
    const filters = ['location-filter', 'domain-filter', 'stipend-filter', 'workmode-filter'];
    filters.forEach(filterId => {
        const filter = document.getElementById(filterId);
        if (filter) {
            filter.addEventListener('change', function() {
                filterInternships();
            });
        }
    });
}

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    currentView = pageId;
    
    // Special handling for dashboard
    if (pageId === 'dashboard') {
        showDashboardView('overview');
        populateDashboard();
    }
}

function showDashboardView(viewId) {
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Hide all dashboard views
    document.querySelectorAll('.dashboard-view').forEach(view => {
        view.classList.remove('active');
    });
    
    // Show selected view
    document.getElementById(`dashboard-${viewId}`).classList.add('active');
    
    // Update active nav item
    const activeNavItem = document.querySelector(`[onclick="showDashboardView('${viewId}')"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
    
    currentDashboardView = viewId;
    
    // Populate view-specific content
    if (viewId === 'browse') {
        populateAllInternships();
    } else if (viewId === 'saved') {
        populateSavedInternships();
    } else if (viewId === 'applications') {
        populateApplications();
    } else if (viewId === 'profile') {
        populateProfile();
    }
}

function nextStep() {
    if (currentStep < 4) {
        // Hide current step
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        
        // Show next step
        currentStep++;
        document.getElementById(`step-${currentStep}`).classList.add('active');
        
        // Update progress
        updateProgressBar();
        updateStepButtons();
    }
}

function previousStep() {
    if (currentStep > 1) {
        // Hide current step
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        
        // Show previous step
        currentStep--;
        document.getElementById(`step-${currentStep}`).classList.add('active');
        
        // Update progress
        updateProgressBar();
        updateStepButtons();
    }
}

function updateProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    const currentStepSpan = document.getElementById('current-step');
    
    if (progressFill && currentStepSpan) {
        const progress = (currentStep / 4) * 100;
        progressFill.style.width = `${progress}%`;
        currentStepSpan.textContent = currentStep;
    }
}

function updateStepButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const completeBtn = document.getElementById('complete-btn');
    
    if (prevBtn) {
        prevBtn.style.display = currentStep > 1 ? 'inline-flex' : 'none';
    }
    
    if (nextBtn && completeBtn) {
        if (currentStep === 4) {
            nextBtn.style.display = 'none';
            completeBtn.style.display = 'inline-flex';
        } else {
            nextBtn.style.display = 'inline-flex';
            completeBtn.style.display = 'none';
        }
    }
}

function completeProfile() {
    // Collect profile data
    userProfile = {
        fullName: document.getElementById('fullName')?.value || 'John Doe',
        email: document.getElementById('email')?.value || 'john.doe@email.com',
        phone: document.getElementById('phone')?.value || '+91 9876543210',
        location: document.getElementById('location')?.value || 'Mumbai',
        educationLevel: document.getElementById('educationLevel')?.value || 'Undergraduate',
        fieldOfStudy: document.getElementById('fieldOfStudy')?.value || 'Computer Science',
        university: document.getElementById('university')?.value || 'IIT Mumbai',
        cgpa: document.getElementById('cgpa')?.value || '8.5',
        graduationYear: document.getElementById('graduationYear')?.value || '2025',
        workMode: document.querySelector('input[name="workMode"]:checked')?.value || 'hybrid',
        duration: document.getElementById('duration')?.value || '3-6',
        stipend: document.getElementById('stipend')?.value || '10000-25000',
        availability: document.getElementById('availability')?.value || 'immediate',
        skills: selectedSkills,
        interests: selectedInterests
    };
    
    // Show success animation
    showSuccessMessage();
    
    // Redirect to dashboard after delay
    setTimeout(() => {
        showPage('dashboard');
    }, 2000);
}

function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                    background: white; padding: 40px; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                    text-align: center; z-index: 10000; animation: slideUp 0.5s ease;">
            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #10b981, #059669); 
                        border-radius: 50%; display: flex; align-items: center; justify-content: center; 
                        margin: 0 auto 20px; color: white; font-size: 32px;">
                <i class="fas fa-check"></i>
            </div>
            <h2 style="color: #1e293b; margin-bottom: 12px;">Profile Created Successfully!</h2>
            <p style="color: #64748b;">Redirecting to your personalized dashboard...</p>
        </div>
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background: rgba(0,0,0,0.5); z-index: 9999;"></div>
    `;
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
        document.body.removeChild(successMessage);
    }, 2000);
}

function populateInternships() {
    const recommendedContainer = document.getElementById('recommended-internships');
    if (recommendedContainer) {
        recommendedContainer.innerHTML = internships.slice(0, 3).map(internship => 
            createInternshipCard(internship)
        ).join('');
    }
}

function populateAllInternships() {
    const container = document.getElementById('all-internships');
    if (container) {
        container.innerHTML = internships.map(internship => 
            createInternshipCard(internship)
        ).join('');
    }
}

function populateDashboard() {
    // Update user name
    const userName = userProfile.fullName || 'John Doe';
    const firstName = userName.split(' ')[0];
    
    document.getElementById('user-name').textContent = userName;
    document.getElementById('welcome-name').textContent = firstName;
    
    // Populate recommended internships
    populateInternships();
    
    // Populate recent applications
    populateRecentApplications();
}

function populateRecentApplications() {
    const container = document.getElementById('recent-applications');
    if (container) {
        const recentApps = applications.slice(0, 3);
        if (recentApps.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #64748b;">
                    <i class="fas fa-file-alt" style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"></i>
                    <p>No applications yet. Start browsing internships!</p>
                </div>
            `;
        } else {
            container.innerHTML = recentApps.map(app => createApplicationCard(app)).join('');
        }
    }
}

function populateSavedInternships() {
    const container = document.getElementById('saved-internships');
    const countElement = document.getElementById('saved-count');
    
    if (countElement) {
        countElement.textContent = savedInternships.length;
    }
    
    if (container) {
        if (savedInternships.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 60px 20px; color: #64748b;">
                    <i class="fas fa-bookmark" style="font-size: 64px; margin-bottom: 20px; opacity: 0.3;"></i>
                    <h3 style="margin-bottom: 12px; color: #374151;">No saved internships yet</h3>
                    <p style="margin-bottom: 24px;">Save internships you're interested in to view them here</p>
                    <button class="btn-primary" onclick="showDashboardView('browse')">
                        <i class="fas fa-search"></i>
                        Browse Internships
                    </button>
                </div>
            `;
        } else {
            const savedInternshipData = savedInternships.map(id => 
                internships.find(internship => internship.id === id)
            ).filter(Boolean);
            
            container.innerHTML = savedInternshipData.map(internship => 
                createInternshipCard(internship)
            ).join('');
        }
    }
}

function populateApplications() {
    const container = document.getElementById('all-applications');
    if (container) {
        if (applications.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 60px 20px; color: #64748b;">
                    <i class="fas fa-file-alt" style="font-size: 64px; margin-bottom: 20px; opacity: 0.3;"></i>
                    <h3 style="margin-bottom: 12px; color: #374151;">No applications yet</h3>
                    <p style="margin-bottom: 24px;">Start applying to internships to track your progress here</p>
                    <button class="btn-primary" onclick="showDashboardView('browse')">
                        <i class="fas fa-search"></i>
                        Browse Internships
                    </button>
                </div>
            `;
        } else {
            container.innerHTML = applications.map(app => createApplicationCard(app)).join('');
        }
    }
}

function populateProfile() {
    // Update profile information
    const profileFields = {
        'profile-name': userProfile.fullName || 'John Doe',
        'profile-email': userProfile.email || 'john.doe@email.com',
        'profile-phone': userProfile.phone || '+91 9876543210',
        'profile-location': userProfile.location || 'Mumbai',
        'profile-education': userProfile.educationLevel || 'Undergraduate',
        'profile-field': userProfile.fieldOfStudy || 'Computer Science',
        'profile-university': userProfile.university || 'IIT Mumbai',
        'profile-cgpa': userProfile.cgpa || '8.5'
    };
    
    Object.entries(profileFields).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    });
    
    // Update skills display
    const skillsContainer = document.getElementById('profile-skills');
    if (skillsContainer) {
        const skills = userProfile.skills || ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'];
        skillsContainer.innerHTML = skills.map(skill => 
            `<span class="skill-tag">${skill}</span>`
        ).join('');
    }
}

function createInternshipCard(internship) {
    const isSaved = savedInternships.includes(internship.id);
    const hasApplied = applications.some(app => app.internshipId === internship.id);
    
    return `
        <div class="internship-card" onclick="showInternshipDetails(${internship.id})">
            <div class="internship-header">
                <div class="company-logo">
                    ${internship.company.charAt(0)}
                </div>
                <button class="save-btn ${isSaved ? 'saved' : ''}" onclick="event.stopPropagation(); toggleSave(${internship.id})">
                    <i class="fas fa-bookmark"></i>
                </button>
            </div>
            <h3 class="internship-title">${internship.title}</h3>
            <p class="company-name">${internship.company}</p>
            <div class="internship-details">
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${internship.location}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-laptop"></i>
                    <span>${internship.workMode}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-rupee-sign"></i>
                    <span>${internship.stipend}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <span>${internship.duration}</span>
                </div>
            </div>
            <div class="skills-tags">
                ${internship.skills.slice(0, 3).map(skill => 
                    `<span class="skill-tag-small">${skill}</span>`
                ).join('')}
                ${internship.skills.length > 3 ? `<span class="skill-tag-small">+${internship.skills.length - 3}</span>` : ''}
            </div>
            <div class="internship-actions">
                <button class="btn-primary btn-small" onclick="event.stopPropagation(); applyToInternship(${internship.id})" 
                        ${hasApplied ? 'disabled' : ''}>
                    <i class="fas fa-paper-plane"></i>
                    ${hasApplied ? 'Applied' : 'Apply Now'}
                </button>
                <button class="btn-secondary btn-small" onclick="event.stopPropagation(); showInternshipDetails(${internship.id})">
                    <i class="fas fa-eye"></i>
                    View Details
                </button>
            </div>
        </div>
    `;
}

function createApplicationCard(application) {
    const internship = internships.find(i => i.id === application.internshipId);
    if (!internship) return '';
    
    const statusClass = `status-${application.status.toLowerCase().replace(' ', '-')}`;
    
    return `
        <div class="application-card">
            <div class="application-info">
                <div class="company-logo">
                    ${internship.company.charAt(0)}
                </div>
                <div class="application-details">
                    <h3>${internship.title}</h3>
                    <p>${internship.company}</p>
                    <div class="application-date">Applied on ${application.appliedDate}</div>
                </div>
            </div>
            <div class="status-badge ${statusClass}">
                ${application.status}
            </div>
        </div>
    `;
}

function toggleSave(internshipId) {
    if (savedInternships.includes(internshipId)) {
        savedInternships = savedInternships.filter(id => id !== internshipId);
    } else {
        savedInternships.push(internshipId);
    }
    
    // Update UI
    const saveBtn = document.querySelector(`[onclick*="toggleSave(${internshipId})"]`);
    if (saveBtn) {
        saveBtn.classList.toggle('saved');
    }
    
    // Update saved count if on saved page
    if (currentDashboardView === 'saved') {
        populateSavedInternships();
    }
}

function applyToInternship(internshipId) {
    const internship = internships.find(i => i.id === internshipId);
    if (!internship) return;
    
    // Check if already applied
    if (applications.some(app => app.internshipId === internshipId)) {
        return;
    }
    
    // Add application
    const application = {
        id: applications.length + 1,
        internshipId: internshipId,
        appliedDate: new Date().toLocaleDateString('en-IN'),
        status: 'Pending'
    };
    
    applications.push(application);
    
    // Show success message
    showApplicationSuccess(internship.title);
    
    // Update UI
    setTimeout(() => {
        if (currentDashboardView === 'browse') {
            populateAllInternships();
        } else if (currentDashboardView === 'overview') {
            populateInternships();
            populateRecentApplications();
        }
    }, 1000);
}

function showApplicationSuccess(internshipTitle) {
    const successMessage = document.createElement('div');
    successMessage.innerHTML = `
        <div style="position: fixed; top: 20px; right: 20px; background: white; padding: 20px; 
                    border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); z-index: 10000;
                    border-left: 4px solid #10b981; animation: slideInRight 0.5s ease;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 40px; height: 40px; background: #10b981; border-radius: 50%; 
                            display: flex; align-items: center; justify-content: center; color: white;">
                    <i class="fas fa-check"></i>
                </div>
                <div>
                    <h4 style="margin: 0; color: #1e293b;">Application Submitted!</h4>
                    <p style="margin: 4px 0 0 0; color: #64748b; font-size: 14px;">Applied to ${internshipTitle}</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
        successMessage.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(successMessage);
        }, 500);
    }, 3000);
}

function showInternshipDetails(internshipId) {
    const internship = internships.find(i => i.id === internshipId);
    if (!internship) return;
    
    const modal = document.getElementById('internship-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = internship.title;
    
    const isSaved = savedInternships.includes(internship.id);
    const hasApplied = applications.some(app => app.internshipId === internship.id);
    
    modalBody.innerHTML = `
        <div class="internship-detail-content">
            <div class="detail-header">
                <div class="company-info">
                    <div class="company-logo-large">
                        ${internship.company.charAt(0)}
                    </div>
                    <div>
                        <h2>${internship.company}</h2>
                        <p style="color: #64748b; margin: 4px 0;">${internship.location} • ${internship.workMode}</p>
                    </div>
                </div>
                <div class="detail-actions">
                    <button class="btn-secondary" onclick="toggleSave(${internship.id}); updateModalSaveButton(${internship.id})">
                        <i class="fas fa-bookmark"></i>
                        ${isSaved ? 'Saved' : 'Save'}
                    </button>
                    <button class="btn-primary" onclick="applyToInternship(${internship.id}); closeModal()" ${hasApplied ? 'disabled' : ''}>
                        <i class="fas fa-paper-plane"></i>
                        ${hasApplied ? 'Applied' : 'Apply Now'}
                    </button>
                </div>
            </div>
            
            <div class="detail-overview">
                <div class="overview-grid">
                    <div class="overview-item">
                        <i class="fas fa-rupee-sign"></i>
                        <div>
                            <strong>Stipend</strong>
                            <span>${internship.stipend}/month</span>
                        </div>
                    </div>
                    <div class="overview-item">
                        <i class="fas fa-clock"></i>
                        <div>
                            <strong>Duration</strong>
                            <span>${internship.duration}</span>
                        </div>
                    </div>
                    <div class="overview-item">
                        <i class="fas fa-calendar"></i>
                        <div>
                            <strong>Deadline</strong>
                            <span>${new Date(internship.applicationDeadline).toLocaleDateString('en-IN')}</span>
                        </div>
                    </div>
                    <div class="overview-item">
                        <i class="fas fa-users"></i>
                        <div>
                            <strong>Applicants</strong>
                            <span>${internship.applicants} applied</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h3>About the Role</h3>
                <p>${internship.description}</p>
            </div>
            
            <div class="detail-section">
                <h3>Key Responsibilities</h3>
                <ul>
                    ${internship.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h3>Requirements</h3>
                <ul>
                    ${internship.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h3>What We Offer</h3>
                <ul>
                    ${internship.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h3>Required Skills</h3>
                <div class="skills-tags">
                    ${internship.skills.map(skill => `<span class="skill-tag-small">${skill}</span>`).join('')}
                </div>
            </div>
            
            <div class="detail-section">
                <h3>Contact Information</h3>
                <div class="contact-info">
                    <p><strong>Contact Person:</strong> ${internship.contactPerson}</p>
                    <p><strong>Email:</strong> ${internship.contactEmail}</p>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function updateModalSaveButton(internshipId) {
    const isSaved = savedInternships.includes(internshipId);
    const saveBtn = document.querySelector('.detail-actions .btn-secondary');
    if (saveBtn) {
        saveBtn.innerHTML = `
            <i class="fas fa-bookmark"></i>
            ${isSaved ? 'Saved' : 'Save'}
        `;
    }
}

function closeModal() {
    const modal = document.getElementById('internship-modal');
    modal.classList.remove('active');
}

function filterInternships() {
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    const locationFilter = document.getElementById('location-filter')?.value || '';
    const domainFilter = document.getElementById('domain-filter')?.value || '';
    const stipendFilter = document.getElementById('stipend-filter')?.value || '';
    const workmodeFilter = document.getElementById('workmode-filter')?.value || '';
    
    let filteredInternships = internships.filter(internship => {
        const matchesSearch = !searchTerm || 
            internship.title.toLowerCase().includes(searchTerm) ||
            internship.company.toLowerCase().includes(searchTerm) ||
            internship.skills.some(skill => skill.toLowerCase().includes(searchTerm));
        
        const matchesLocation = !locationFilter || internship.location.toLowerCase() === locationFilter;
        const matchesDomain = !domainFilter || internship.domain === domainFilter;
        const matchesWorkMode = !workmodeFilter || internship.workMode.toLowerCase() === workmodeFilter;
        
        let matchesStipend = true;
        if (stipendFilter) {
            const stipendValue = parseInt(internship.stipend.replace(/[₹,]/g, ''));
            const [min, max] = stipendFilter.split('-').map(v => parseInt(v));
            matchesStipend = stipendValue >= min && (max ? stipendValue <= max : true);
        }
        
        return matchesSearch && matchesLocation && matchesDomain && matchesStipend && matchesWorkMode;
    });
    
    const container = document.getElementById('all-internships');
    if (container) {
        if (filteredInternships.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #64748b;">
                    <i class="fas fa-search" style="font-size: 64px; margin-bottom: 20px; opacity: 0.3;"></i>
                    <h3 style="margin-bottom: 12px; color: #374151;">No internships found</h3>
                    <p>Try adjusting your search criteria or filters</p>
                </div>
            `;
        } else {
            container.innerHTML = filteredInternships.map(internship => 
                createInternshipCard(internship)
            ).join('');
        }
    }
}

// Add some sample applications for demo
setTimeout(() => {
    applications = [
        {
            id: 1,
            internshipId: 1,
            appliedDate: '2024-01-20',
            status: 'Shortlisted'
        },
        {
            id: 2,
            internshipId: 3,
            appliedDate: '2024-01-18',
            status: 'Pending'
        },
        {
            id: 3,
            internshipId: 5,
            appliedDate: '2024-01-15',
            status: 'Pending'
        }
    ];
    
    savedInternships = [2, 4, 6];
}, 1000);

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .company-logo-large {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #3b82f6, #1e40af);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 32px;
        font-weight: 700;
    }
    
    .detail-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 32px;
        gap: 20px;
    }
    
    .company-info {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    
    .company-info h2 {
        margin: 0;
        font-size: 1.5rem;
        color: #1e293b;
    }
    
    .detail-actions {
        display: flex;
        gap: 12px;
    }
    
    .detail-overview {
        background: #f8fafc;
        border-radius: 12px;
        padding: 24px;
        margin-bottom: 32px;
    }
    
    .overview-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
    }
    
    .overview-item {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .overview-item i {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #3b82f6;
        font-size: 18px;
    }
    
    .overview-item strong {
        display: block;
        color: #374151;
        font-size: 0.875rem;
    }
    
    .overview-item span {
        color: #1e293b;
        font-weight: 600;
    }
    
    .detail-section {
        margin-bottom: 32px;
    }
    
    .detail-section h3 {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 16px;
        color: #1e293b;
    }
    
    .detail-section ul {
        list-style: none;
        padding: 0;
    }
    
    .detail-section li {
        padding: 8px 0;
        padding-left: 24px;
        position: relative;
        color: #374151;
        line-height: 1.6;
    }
    
    .detail-section li::before {
        content: '•';
        color: #3b82f6;
        font-weight: bold;
        position: absolute;
        left: 0;
    }
    
    .contact-info p {
        margin: 8px 0;
        color: #374151;
    }
    
    .contact-info strong {
        color: #1e293b;
    }
`;
document.head.appendChild(style);