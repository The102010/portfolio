function toggleLanguage() {
    const elements = {
        name: {
            ar: "أحمد أنس الفليج",
            en: "Ahmed Anas ALFULAYJ"
        },
        title: {
            ar: "طالب علوم الحاسب بجامعة الملك سعود",
            en: "Computer Science Student at King Saud University"
        },
        "about-link": {
            ar: "مقدمة",
            en: "About"
        },
        "experience-link": {
            ar: "الخبرات",
            en: "Experience"
        },
        "projects-link": {
            ar: "المشاريع",
            en: "Projects"
        },
        "education-link": {
            ar: "التعليم",
            en: "Education"
        },
        "skills-link": {
            ar: "المهارات",
            en: "Skills"
        },
        "contact-link": {
            ar: "التواصل",
            en: "Contact"
        },
        "about-heading": {
            ar: "مقدمة",
            en: "About"
        },
        "about-text": {
            ar: "أهلاً! أنا أحمد أنس الفليج، طالب علوم الحاسب بجامعة الملك سعود. لدي شغف بتطوير البرمجيات والتعلم الآلي وتحليل البيانات.",
            en: "Hello! I'm Ahmed Anas ALFULAYJ, a Computer Science student at King Saud University. I have a passion for software development, machine learning, and data analysis."
        },
        "experience-heading": {
            ar: "الخبرات",
            en: "Experience"
        },
        "experience-job-title": {
            ar: "تدريب في شركة ABC",
            en: "Internship at ABC Company"
        },
        "experience-job-desc": {
            ar: "عملت كمتدرب في قسم تطوير البرمجيات حيث تعلمت كيفية العمل ضمن فريق وتطوير تطبيقات ويب باستخدام Django.",
            en: "Worked as an intern in the software development department, where I learned how to work in a team and develop web applications using Django."
        },
        "projects-heading": {
            ar: "المشاريع",
            en: "Projects"
        },
        "projects-title": {
            ar: "مشروع XYZ",
            en: "Project XYZ"
        },
        "projects-desc": {
            ar: "تطوير نظام لإدارة المحتوى باستخدام تقنيات الويب الحديثة.",
            en: "Developing a content management system using modern web technologies."
        },
        "education-heading": {
            ar: "التعليم",
            en: "Education"
        },
        "education-school": {
            ar: "جامعة الملك سعود",
            en: "King Saud University"
        },
        "education-degree": {
            ar: "بكالوريوس علوم الحاسب، متوقع التخرج في أغسطس 2024.",
            en: "Bachelor of Computer Science, expected graduation in August 2024."
        },
        "skills-heading": {
            ar: "المهارات",
            en: "Skills"
        },
        "skill1": {
            ar: "تطوير البرمجيات",
            en: "Software Development"
        },
        "skill2": {
            ar: "تحليل البيانات",
            en: "Data Analysis"
        },
        "skill3": {
            ar: "التعلم الآلي",
            en: "Machine Learning"
        },
        "skill4": {
            ar: "إدارة قواعد البيانات",
            en: "Database Management"
        },
        "contact-heading": {
            ar: "التواصل",
            en: "Contact"
        },
        "contact-email": {
            ar: "البريد الإلكتروني: your.email@example.com",
            en: "Email: your.email@example.com"
        },
        "contact-linkedin": {
            ar: "LinkedIn: <a href='https://www.linkedin.com/in/yourprofile' id='contact-linkedin-url'>ملفي على LinkedIn</a>",
            en: "LinkedIn: <a href='https://www.linkedin.com/in/yourprofile' id='contact-linkedin-url'>My LinkedIn Profile</a>"
        }
    };

    const lang = document.documentElement.lang === "ar" ? "en" : "ar";
    document.documentElement.lang = lang;

    for (const id in elements) {
        document.getElementById(id).innerHTML = elements[id][lang];
    }

    document.querySelector("button").textContent = lang === "ar" ? "Switch to English" : "تبديل إلى العربية";
}
