// ================= TEST SETTINGS =================

const MARKS_PER_QUESTION = 2;
const TEST_TIME_MINUTES = 180;

// Question format: [question, [A, B, C, D], correct answer index]

const questionData = [

    // ========== BASIC EXPLOITATION TECHNIQUES (1-25) ==========

    ["What is the primary purpose of exploitation during an authorized security assessment?", ["Damage the target", "Validate whether a vulnerability can be abused", "Install unnecessary software", "Disable all security controls"], 1],

    ["A weakness in a system, application, or configuration is called:", ["Payload", "Exploit", "Vulnerability", "Session"], 2],

    ["What is an exploit?", ["A system weakness", "A method or code used to take advantage of a vulnerability", "A security monitoring system", "A software update"], 1],

    ["What is a payload in exploitation?", ["A firewall rule", "Code or instructions delivered or executed through an exploit", "A network address", "A security patch"], 1],

    ["Which of the following is part of a system's attack surface?", ["Open ports and running services", "Desktop wallpaper", "System clock only", "Installed fonts"], 0],

    ["Exploiting a vulnerable network service without local access is:", ["Local exploitation", "Remote exploitation", "Physical exploitation", "Passive scanning"], 1],

    ["A tester with a normal account uses a weakness to gain administrator access. This is:", ["Remote exploitation", "Local exploitation", "DNS enumeration", "Passive reconnaissance"], 1],

    ["A victim opens a malicious PDF that exploits a PDF reader vulnerability. This is:", ["Client-side exploitation", "Network segmentation", "DNS enumeration", "Physical exploitation"], 0],

    ["An application allows user input to manipulate database queries. Which vulnerability may exist?", ["Buffer Overflow", "SQL Injection", "ARP Spoofing", "Privilege Escalation"], 1],

    ["A web application executes malicious scripts in a visitor's browser. This is:", ["Command Injection", "File Inclusion", "Cross-Site Scripting", "Buffer Overflow"], 2],

    ["Writing more data into memory than an allocated buffer can handle may cause:", ["Buffer Overflow", "DNS Resolution", "Data Classification", "Network Segmentation"], 0],

    ["Which vulnerability occurs when user input becomes part of an operating-system command?", ["SQL Injection", "Command Injection", "XSS", "File Inclusion"], 1],

    ["An application improperly includes a local or external file. This describes:", ["Authentication Bypass", "File Inclusion", "Buffer Overflow", "Session Management"], 1],

    ["Which vulnerability may allow access without proper identity verification?", ["Authentication Bypass", "Network Segmentation", "Data Classification", "Service Enumeration"], 0],

    ["Which payload initiates a connection from the target back to the tester?", ["Bind Payload", "Reverse Payload", "Static Payload", "Local Payload"], 1],

    ["A target system opens a listening port and waits for the tester to connect. This is:", ["Reverse Payload", "Bind Payload", "Staged Payload", "Non-staged Payload"], 1],

    ["A small loader downloads and executes a larger payload. This describes:", ["Non-staged Payload", "Staged Payload", "Bind Shell", "Interactive Shell"], 1],

    ["Which payload is self-contained and delivered in a single step?", ["Staged Payload", "Reverse Shell", "Non-staged Payload", "Bind Shell"], 2],

    ["Which command searches Exploit Database references for Apache?", ["nmap apache", "searchsploit apache", "nc apache", "chmod apache"], 1],

    ["What does nmap --script vuln 192.168.1.10 do?", ["Deletes vulnerabilities", "Runs vulnerability-related Nmap scripts", "Starts a shell", "Changes the IP address"], 1],

    ["What does nc 192.168.1.10 80 attempt to do?", ["Connect to the specified IP and port", "Scan all UDP ports", "Create a user", "Change DNS records"], 0],

    ["Which activity is performed after successfully gaining access during an assessment?", ["Pre-exploitation", "Post-exploitation", "Passive reconnaissance only", "Network installation"], 1],

    ["What is a session in exploitation?", ["A firewall rule", "An active connection between tester and target", "A software update", "A vulnerability database"], 1],

    ["A normal user obtains administrator privileges because of a weakness. This is:", ["Lateral Movement", "Privilege Escalation", "Data Classification", "Network Segmentation"], 1],

    ["Which technique allows access to remain available after a restart or logout?", ["Cleanup", "Persistence", "Data Classification", "Input Validation"], 1],

    // ========== POST-EXPLOITATION AND SECURITY (26-40) ==========

    ["Finding stored passwords and authentication tokens relates to:", ["Credential Access", "Network Segmentation", "Cleanup", "Patch Management"], 0],

    ["Collecting OS details, user accounts, installed software, and running services is:", ["System Enumeration", "Data Encryption", "Persistence", "Authentication"], 0],

    ["Moving from one compromised system to another is:", ["Privilege Escalation", "Lateral Movement", "Buffer Overflow", "File Inclusion"], 1],

    ["Which activity helps restore systems to their original state after testing?", ["Persistence", "Cleanup Activities", "Credential Access", "Exploitation"], 1],

    ["A scanner reports a vulnerability that does not actually exist. This is:", ["False Positive", "Successful Exploitation", "Privilege Escalation", "Persistence"], 0],

    ["Which countermeasure helps prevent attacks caused by improperly handled user input?", ["Input Validation", "Lateral Movement", "Persistence", "Session Switching"], 0],

    ["What is required before performing exploitation activities?", ["A public IP address", "Written authorization", "An open port", "A password list"], 1],

    ["Which principle limits users to only the permissions required for their roles?", ["Persistence", "Principle of Least Privilege", "Lateral Movement", "Command Injection"], 1],

    ["Why should cleanup be performed after a security assessment?", ["To maintain unauthorized access", "To minimize impact and restore the original state", "To remove all security controls", "To hide vulnerabilities"], 1],

    ["What should a final security assessment report include?", ["Only the tester's name", "Vulnerabilities, impacts, risks, and remediation", "Only the target IP", "Only open applications"], 1],

    ["Which activity identifies information about a target before exploitation?", ["Reconnaissance", "Persistence", "Cleanup", "Privilege Escalation"], 0],

    ["What does vulnerability validation help determine?", ["Whether a reported weakness is genuine", "Whether a computer is switched off", "Whether a password is long", "Whether a website has images"], 0],

    ["Which action is safest when an exploit may disrupt a production system?", ["Run it immediately", "Follow the approved test plan and safety limits", "Disable monitoring", "Ignore authorization"], 1],

    ["What is remediation?", ["Fixing or reducing an identified security weakness", "Creating a payload", "Opening a network port", "Collecting passwords"], 0],

    ["Why is evidence collected during a penetration test?", ["To support findings and conclusions", "To damage the system", "To create extra accounts", "To bypass authorization"], 0],

    // ========== CLOUD SECURITY CORE CONCEPTS (41-65) ==========

    ["What is the main purpose of Cloud Security?", ["Increase internet speed", "Protect cloud systems, applications, data, and infrastructure", "Create social media accounts", "Remove cloud services"], 1],

    ["Which three principles form the CIA Triad?", ["Authentication, Authorization, Accounting", "Confidentiality, Integrity, Availability", "Detection, Exploitation, Recovery", "Privacy, Speed, Performance"], 1],

    ["Under the Shared Responsibility Model, who generally secures physical data centers?", ["Customer", "Cloud provider", "End user", "Application developer only"], 1],

    ["Who is generally responsible for configuring IAM policies and enabling MFA?", ["Cloud customer", "Physical data center operator only", "Internet service provider", "Domain registrar"], 0],

    ["In an IaaS environment, who is generally responsible for securing the operating system?", ["Cloud provider", "Customer", "Domain registrar", "Internet service provider"], 1],

    ["In a PaaS environment, which responsibility generally belongs to the customer?", ["Physical data center security", "Hypervisor maintenance", "Application and data security", "Physical server manufacturing"], 2],

    ["In SaaS, what does the customer primarily remain responsible for securing?", ["Physical servers", "Hypervisors", "User accounts and data access", "Data center buildings"], 2],

    ["Which cloud component controls who can access resources and what actions they can perform?", ["IAM", "DNS", "NTP", "FTP"], 0],

    ["A company groups developers together and assigns common permissions. Which IAM concept is used?", ["Users", "Groups", "Encryption keys", "Audit logs"], 1],

    ["Which IAM component defines permissions that can be assigned to users or services?", ["Groups", "Roles", "Audit Logs", "Security Groups"], 1],

    ["A developer needs read permission but receives permission to delete all resources. Which principle is violated?", ["Zero Trust", "Least Privilege", "Data Classification", "Network Segmentation"], 1],

    ["Information stored on cloud disks, databases, and backups is:", ["Data in Transit", "Data at Rest", "Data in Motion Only", "Public Data"], 1],

    ["Data moving between two cloud applications is classified as:", ["Data at Rest", "Data in Transit", "Restricted Storage", "Archived Data"], 1],

    ["Which technology protects data in transit?", ["TLS", "WEP", "ARP", "FTP"], 0],

    ["Generating, storing, rotating, and protecting cryptographic keys are activities of:", ["Network Segmentation", "Key Management", "System Enumeration", "Session Management"], 1],

    ["Why is proper key management important?", ["It increases cloud users", "Poor key management can weaken strong encryption", "It removes malware", "It replaces access controls"], 1],

    ["Categorizing information as Public, Internal, Confidential, and Restricted is:", ["Data Classification", "Network Segmentation", "Privilege Escalation", "Session Management"], 0],

    ["What is the purpose of cloud Security Groups?", ["Store passwords", "Control inbound and outbound network traffic", "Encrypt every database automatically", "Manage salaries"], 1],

    ["Dividing a network into smaller isolated sections is:", ["Network Segmentation", "Data Classification", "Credential Access", "Persistence"], 0],

    ["What is a major security benefit of network segmentation?", ["Increases attacker movement", "Limits attacker movement between network sections", "Removes authentication", "Disables audit logging"], 1],

    ["Which statement best describes Zero Trust?", ["Trust every internal user", "Never Trust, Always Verify", "Trust every Wi-Fi device", "Allow access without verification"], 1],

    ["Under Zero Trust, when should a user or device be verified?", ["Only during installation", "Before access is granted", "Only after an incident", "Only on public Wi-Fi"], 1],

    ["What is the main purpose of cloud security monitoring?", ["Detect suspicious activities and anomalies", "Delete audit logs", "Disable all accounts", "Increase storage costs"], 0],

    ["Which information can be recorded in cloud audit logs?", ["Login attempts and configuration changes", "Monitor brightness", "Keyboard layouts", "Internet speed only"], 0],

    ["Which AWS service records API activity and user actions?", ["CloudTrail", "IAM Groups", "Security Groups", "Amazon Route 53 only"], 0],

    // ========== CLOUD RISKS AND COMPLIANCE (66-85) ==========

    ["A SIEM system collects and analyzes logs from multiple sources. What is a major benefit?", ["Centralized monitoring and threat detection", "Automatic removal of all vulnerabilities", "Unlimited permissions", "Disabling backups"], 0],

    ["A cloud storage bucket is accidentally configured for public access. This is:", ["Misconfigured Storage", "Network Segmentation", "Key Rotation", "Secure Configuration"], 0],

    ["An employee has more cloud permissions than required. This is:", ["Excessive Permissions", "Data in Transit", "Secure Backup", "Network Monitoring"], 0],

    ["A cloud account is compromised because of a weak password and disabled MFA. This is:", ["Weak Authentication", "Network Segmentation", "Data Classification", "Key Rotation"], 0],

    ["A cloud API exposes sensitive functions because of poor security controls. This is:", ["Insecure API", "Secure Configuration", "Data Classification", "Backup Recovery"], 0],

    ["Employees use cloud applications without organizational approval. This is called:", ["Shadow IT", "Zero Trust", "CloudTrail", "Data at Rest"], 0],

    ["Which practice adds another authentication layer beyond a password?", ["MFA", "DNS", "NFS", "FTP"], 0],

    ["Regularly reviewing permissions, configurations, and activity logs is:", ["Regular Auditing", "Lateral Movement", "Persistence", "Command Injection"], 0],

    ["Which practice supports business continuity after data loss?", ["Backup and Recovery", "Disabling Audit Logs", "Excessive Permissions", "Public Storage"], 0],

    ["Which regulation is associated with personal data protection?", ["GDPR", "SSH", "DNS", "Nmap"], 0],

    ["Which compliance standard is associated with healthcare information?", ["PCI-DSS", "HIPAA", "WPA3", "TLS"], 1],

    ["Which standard relates to payment card data compliance?", ["GDPR", "HIPAA", "PCI-DSS", "IAM"], 2],

    ["What is the main purpose of cloud governance policies?", ["Define how cloud resources should be managed and secured", "Remove all user accounts", "Allow public access", "Disable monitoring"], 0],

    ["Which combination helps reduce unauthorized access to cloud resources?", ["Weak passwords and excessive permissions", "MFA and Least Privilege", "Public storage and shared accounts", "Disabled logging and open access"], 1],

    ["A company encrypts data but fails to protect encryption keys. What is the concern?", ["Poor key management can weaken encryption", "Encryption becomes stronger", "Segmentation is unnecessary", "Audit logs stop working"], 0],

    ["What is a cloud misconfiguration?", ["An incorrect or insecure cloud setting", "A successful backup", "A strong password", "An encrypted connection"], 0],

    ["Why should cloud access permissions be reviewed regularly?", ["To identify unnecessary or excessive access", "To increase public access", "To remove encryption", "To disable logging"], 0],

    ["What is the purpose of MFA?", ["Require multiple forms of identity verification", "Allow password-free public access", "Replace all backups", "Increase network speed"], 0],

    ["Which control helps identify who performed an action in a cloud account?", ["Audit Logging", "Data Compression", "File Formatting", "Network Caching"], 0],

    ["Which is a good practice for protecting cloud storage?", ["Allow anonymous public access", "Apply appropriate access permissions and encryption", "Share administrator credentials", "Disable audit logs"], 1],

    // ========== INTERMEDIATE AND ADVANCED SCENARIOS (86-100) ==========

    ["A tester discovers a vulnerable service but has not yet used it. What should happen first?", ["Exploit immediately", "Verify scope and authorization", "Delete the service", "Publish the target IP"], 1],

    ["A reverse payload cannot connect back to the tester. Which factor should be checked first?", ["Network routing and firewall rules", "Desktop wallpaper", "Keyboard language", "Screen resolution"], 0],

    ["A tester finds that an application accepts untrusted input in a database query. Which defense is most appropriate?", ["Parameterized queries", "Disable audit logs", "Use longer URLs", "Increase screen brightness"], 0],

    ["A web application reflects untrusted input as executable browser code. Which defense is useful?", ["Output encoding and input handling", "Public storage", "Disabling backups", "Sharing user accounts"], 0],

    ["A user can access another user's records by changing an identifier in a request. What type of issue may this indicate?", ["Broken Access Control", "Network Segmentation", "Key Rotation", "Data Compression"], 0],

    ["An attacker compromises one cloud account and attempts to access other resources. Which control can limit the impact?", ["Least Privilege and segmentation", "Shared administrator accounts", "Public access", "Disabled MFA"], 0],

    ["A cloud administrator notices an unusual login from an unfamiliar location. What should be done?", ["Investigate the event and verify the account activity", "Ignore the event", "Delete all backups", "Make the account public"], 0],

    ["Why should cloud audit logs be protected from unauthorized modification?", ["To preserve trustworthy investigation evidence", "To increase user permissions", "To reduce encryption strength", "To disable monitoring"], 0],

    ["A company needs to know whether stored cloud data has been changed unexpectedly. Which security property is relevant?", ["Integrity", "Availability", "Usability", "Portability"], 0],

    ["A cloud service becomes unavailable because of an attack. Which CIA principle is affected most directly?", ["Confidentiality", "Integrity", "Availability", "Authentication"], 2],

    ["Sensitive customer data is exposed to an unauthorized person. Which CIA principle is affected?", ["Confidentiality", "Availability", "Performance", "Portability"], 0],

    ["A tester finds a weakness but cannot reproduce it. What is the best reporting approach?", ["Report it as confirmed exploitation", "Record the observation and clearly state the limitation", "Invent supporting evidence", "Ignore the scope"], 1],

    ["Which approach is best for reducing the risk of a cloud administrator account compromise?", ["MFA, least privilege, and activity monitoring", "Shared passwords and public access", "Disabled logging and weak passwords", "Permanent unrestricted access"], 0],

    ["An organization wants to detect suspicious activity across multiple cloud services. What can help?", ["Centralized SIEM and audit-log analysis", "Disabling all logs", "Removing MFA", "Allowing anonymous access"], 0],

    ["After completing an authorized penetration test, what should the tester provide?", ["A report with evidence, impact, and remediation guidance", "A permanent backdoor", "A list of stolen credentials", "An undocumented system change"], 0]

];

// Convert compact question data into the format used by the test.
const questions = questionData.map(([question, options, answer]) => ({
    question,
    options,
    answer
}));

// ================= TEST STATE =================

let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
let timeLeft = TEST_TIME_MINUTES * 60;
let timerInterval = null;
let studentName = "";
let rollNumber = "";
let testSubmitted = false;

const totalMarks = questions.length * MARKS_PER_QUESTION;

// ================= START TEST =================

function startTest() {
    studentName = document.getElementById("student-name").value.trim();
    rollNumber = document.getElementById("roll-number").value.trim();

    if (!studentName || !rollNumber) {
        document.getElementById("start-error").textContent =
            "Please enter your name and roll number.";
        return;
    }

    document.getElementById("start-error").textContent = "";
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("test-screen").style.display = "flex";

    document.getElementById("total-questions").textContent = questions.length;
    document.getElementById("total-marks").textContent = totalMarks;

    createQuestionPalette();
    showQuestion();
    updateTimer();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitTest(true);
        }
    }, 1000);
}

// ================= DISPLAY QUESTION =================

function showQuestion() {
    const question = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("question").textContent = question.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

        if (userAnswers[currentQuestion] === index) {
            button.classList.add("selected");
        }

        button.addEventListener("click", () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });

    document.getElementById("previous-button").disabled =
        currentQuestion === 0;

    document.getElementById("next-button").disabled =
        currentQuestion === questions.length - 1;

    updateQuestionPalette();
}

// ================= SELECT ANSWER =================

function selectAnswer(selectedIndex) {
    if (testSubmitted) return;

    userAnswers[currentQuestion] = selectedIndex;
    showQuestion();
}

// ================= QUESTION NAVIGATION =================

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// ================= QUESTION PALETTE =================

function createQuestionPalette() {
    const palette = document.getElementById("question-palette");
    palette.innerHTML = "";

    questions.forEach((question, index) => {
        const button = document.createElement("button");

        button.textContent = index + 1;
        button.className = "question-button";

        button.addEventListener("click", () => {
            currentQuestion = index;
            showQuestion();
        });

        palette.appendChild(button);
    });
}

function updateQuestionPalette() {
    const buttons = document.querySelectorAll(".question-button");

    buttons.forEach((button, index) => {
        button.classList.remove("current", "answered");

        if (userAnswers[index] !== null) {
            button.classList.add("answered");
        }

        if (index === currentQuestion) {
            button.classList.add("current");
        }
    });
}

// ================= TIMER =================

function updateTimer() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    const formattedTime = [
        hours,
        minutes,
        seconds
    ].map(value => String(value).padStart(2, "0")).join(":");

    document.getElementById("timer").textContent =
        `Time Remaining: ${formattedTime}`;
}

// ================= SUBMIT TEST =================

function submitTest(autoSubmit = false) {
    if (testSubmitted) return;

    const answeredCount = userAnswers.filter(
        answer => answer !== null
    ).length;

    const skippedCount = questions.length - answeredCount;

    if (!autoSubmit && skippedCount > 0) {
        const confirmSubmit = confirm(
            `You have answered ${answeredCount} questions and skipped ${skippedCount}.\nAre you sure you want to submit?`
        );

        if (!confirmSubmit) return;
    } else if (!autoSubmit) {
        const confirmSubmit = confirm(
            "Are you sure you want to submit your test?"
        );

        if (!confirmSubmit) return;
    }

    testSubmitted = true;
    clearInterval(timerInterval);

    calculateResult(answeredCount, skippedCount);
}

// ================= CALCULATE RESULT =================

function calculateResult(answeredCount, skippedCount) {
    let correctCount = 0;
    let wrongCount = 0;

    questions.forEach((question, index) => {
        if (userAnswers[index] === null) return;

        if (userAnswers[index] === question.answer) {
            correctCount++;
        } else {
            wrongCount++;
        }
    });

    const score = correctCount * MARKS_PER_QUESTION;
    const percentage = (score / totalMarks) * 100;

    document.getElementById("test-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";

    document.getElementById("result-name").textContent = studentName;
    document.getElementById("result-roll").textContent = rollNumber;

    document.getElementById("answered").textContent =
        `Answered: ${answeredCount}`;

    document.getElementById("skipped").textContent =
        `Skipped: ${skippedCount}`;

    document.getElementById("correct").textContent =
        `Correct Answers: ${correctCount}`;

    document.getElementById("wrong").textContent =
        `Wrong Answers: ${wrongCount}`;

    document.getElementById("score").textContent =
        `Score: ${score} / ${totalMarks}`;

    document.getElementById("percentage").textContent =
        `Percentage: ${percentage.toFixed(2)}%`;
}

// ================= VERIFY QUESTION COUNT =================

console.log("Total Questions:", questions.length);
console.log("Total Marks:", totalMarks);

if (questions.length !== 100) {
    console.error("Question count error! Expected exactly 100 questions.");
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded successfully!");
    console.log("Start function:", typeof startTest);
    console.log("Total Questions:", questions.length);
});
