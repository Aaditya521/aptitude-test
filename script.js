
const questions = [

    // ================= BASIC EXPLOITATION TECHNIQUES =================

    {
        question: "What is the primary purpose of exploitation during an authorized security assessment?",
        options: [
            "To permanently damage the target",
            "To validate whether a vulnerability can be abused",
            "To install unnecessary software",
            "To disable all security controls"
        ],
        answer: 1
    },

    {
        question: "A weakness in a system, application, or configuration is called:",
        options: ["Payload", "Exploit", "Vulnerability", "Session"],
        answer: 2
    },

    {
        question: "Which statement correctly describes an exploit?",
        options: [
            "A weakness in system configuration",
            "A method or code used to take advantage of a vulnerability",
            "An action performed after exploitation",
            "A security monitoring system"
        ],
        answer: 1
    },

    {
        question: "A tester uses a vulnerability to gain access to protected resources. The action performed after successful exploitation is called:",
        options: ["Attack surface", "Payload", "Patch", "Firewall"],
        answer: 1
    },

    {
        question: "Which of the following is part of a system's attack surface?",
        options: [
            "Open ports and running services",
            "Only the computer's wallpaper",
            "Only the system clock",
            "Only installed fonts"
        ],
        answer: 0
    },

    {
        question: "A tester exploits a vulnerable network service without having local access to the target. This is:",
        options: [
            "Local exploitation",
            "Remote exploitation",
            "Client-side exploitation",
            "Physical exploitation"
        ],
        answer: 1
    },

    {
        question: "A security tester already has a normal user account and discovers a weakness that could provide administrator access. This is an example of:",
        options: [
            "Remote exploitation",
            "Local exploitation",
            "DNS enumeration",
            "Passive reconnaissance"
        ],
        answer: 1
    },

    {
        question: "A victim opens a malicious PDF that exploits a vulnerability in a PDF reader. Which exploitation type is involved?",
        options: [
            "Client-side exploitation",
            "Local network exploitation",
            "Remote server administration",
            "Wireless exploitation"
        ],
        answer: 0
    },

    {
        question: "An application allows user input to manipulate database queries. Which vulnerability may be present?",
        options: [
            "Buffer overflow",
            "SQL Injection",
            "ARP spoofing",
            "Privilege escalation"
        ],
        answer: 1
    },

    {
        question: "A web application executes malicious scripts inside a visitor's browser. This is:",
        options: [
            "Command Injection",
            "File Inclusion",
            "Cross-Site Scripting",
            "Buffer Overflow"
        ],
        answer: 2
    },

    {
        question: "Writing more data into memory than the allocated buffer can handle may cause:",
        options: [
            "Buffer Overflow",
            "DNS resolution",
            "Data classification",
            "Network segmentation"
        ],
        answer: 0
    },

    {
        question: "Which vulnerability occurs when user input becomes part of an operating-system command?",
        options: [
            "SQL Injection",
            "Command Injection",
            "XSS",
            "File Inclusion"
        ],
        answer: 1
    },

    {
        question: "An application improperly includes a local or external file. Which vulnerability does this describe?",
        options: [
            "Authentication Bypass",
            "File Inclusion",
            "Buffer Overflow",
            "Session Management"
        ],
        answer: 1
    },

    {
        question: "Which vulnerability may allow a person to access a system without proper identity verification?",
        options: [
            "Authentication Bypass",
            "Network Segmentation",
            "Data Classification",
            "Service Enumeration"
        ],
        answer: 0
    },

    {
        question: "Which payload initiates a connection from the target system back to the tester?",
        options: [
            "Bind Payload",
            "Reverse Payload",
            "Static Payload",
            "Local Payload"
        ],
        answer: 1
    },

    {
        question: "A target system opens a listening port and waits for the tester to connect. Which payload is this?",
        options: [
            "Reverse Payload",
            "Bind Payload",
            "Staged Payload",
            "Non-staged Payload"
        ],
        answer: 1
    },

    {
        question: "A small loader downloads and executes a larger payload. This describes:",
        options: [
            "Non-staged Payload",
            "Staged Payload",
            "Bind Shell",
            "Interactive Shell"
        ],
        answer: 1
    },

    {
        question: "Which payload is self-contained and delivered in a single step?",
        options: [
            "Staged Payload",
            "Reverse Shell",
            "Non-staged Payload",
            "Bind Shell"
        ],
        answer: 2
    },

    {
        question: "Which command searches the local Exploit Database for Apache-related exploit references?",
        options: [
            "nmap apache",
            "searchsploit apache",
            "nc apache",
            "chmod apache"
        ],
        answer: 1
    },

    {
        question: "What does the following command do?\nnmap --script vuln 192.168.1.10",
        options: [
            "Deletes vulnerabilities from the target",
            "Runs vulnerability-related Nmap scripts against the target",
            "Starts an interactive shell",
            "Changes the target's IP address"
        ],
        answer: 1
    },

    {
        question: "What is the purpose of the command nc 192.168.1.10 80?",
        options: [
            "Connect to the specified IP address and port",
            "Scan every UDP port",
            "Create a new user account",
            "Change the DNS record"
        ],
        answer: 0
    },

    {
        question: "Which activity is performed after successfully gaining access during an authorized assessment?",
        options: [
            "Pre-exploitation",
            "Post-exploitation",
            "Passive reconnaissance only",
            "Network installation"
        ],
        answer: 1
    },

    {
        question: "What is a session in the context of exploitation?",
        options: [
            "A firewall rule",
            "An active connection between tester and target",
            "A software update",
            "A vulnerability database"
        ],
        answer: 1
    },

    {
        question: "A normal user account obtains administrator privileges because of a security weakness. This is:",
        options: [
            "Lateral Movement",
            "Privilege Escalation",
            "Data Classification",
            "Network Segmentation"
        ],
        answer: 1
    },

    {
        question: "Which technique allows access to remain available after a system restart or user logout?",
        options: [
            "Cleanup",
            "Persistence",
            "Data Classification",
            "Input Validation"
        ],
        answer: 1
    },

    {
        question: "An assessment identifies exposed passwords and stored authentication tokens. Which post-exploitation activity does this relate to?",
        options: [
            "Credential Access",
            "Network Segmentation",
            "Cleanup Activities",
            "Patch Management"
        ],
        answer: 0
    },

    {
        question: "Collecting operating system details, installed software, user accounts, and running services is called:",
        options: [
            "System Enumeration",
            "Data Encryption",
            "Persistence",
            "Authentication"
        ],
        answer: 0
    },

    {
        question: "Moving from one compromised system to another within the same environment is:",
        options: [
            "Privilege Escalation",
            "Lateral Movement",
            "Buffer Overflow",
            "File Inclusion"
        ],
        answer: 1
    },

    {
        question: "Which activity helps return systems to their original state after security testing?",
        options: [
            "Persistence",
            "Cleanup Activities",
            "Credential Access",
            "Exploitation"
        ],
        answer: 1
    },

    {
        question: "A vulnerability scanner reports a weakness that cannot actually be exploited. This is:",
        options: [
            "False Positive",
            "Successful Exploitation",
            "Privilege Escalation",
            "Persistence"
        ],
        answer: 0
    },

    {
        question: "Which countermeasure helps prevent attacks caused by improperly handled user input?",
        options: [
            "Input Validation",
            "Lateral Movement",
            "Persistence",
            "Session Switching"
        ],
        answer: 0
    },

    {
        question: "What is the correct requirement before performing exploitation activities?",
        options: [
            "A publicly available IP address",
            "Written authorization",
            "An open network port",
            "A password list"
        ],
        answer: 1
    },

    {
        question: "Which security control limits users to only the permissions necessary for their roles?",
        options: [
            "Persistence",
            "Principle of Least Privilege",
            "Lateral Movement",
            "Command Injection"
        ],
        answer: 1
    },

    {
        question: "Why should a tester perform cleanup activities after an assessment?",
        options: [
            "To maintain unauthorized access",
            "To minimize operational impact and restore the original state",
            "To remove all system security controls",
            "To hide vulnerabilities from the organization"
        ],
        answer: 1
    },

    {
        question: "Which of the following should be included in a final security assessment report?",
        options: [
            "Only the tester's name",
            "Identified vulnerabilities, impacts, risks, and remediation recommendations",
            "Only the target's IP address",
            "Only the number of open applications"
        ],
        answer: 1
    },

    // ================= CLOUD SECURITY CORE CONCEPTS =================

    {
        question: "What is the main purpose of Cloud Security?",
        options: [
            "To increase internet speed",
            "To protect cloud systems, applications, data, and infrastructure",
            "To create social media accounts",
            "To remove all cloud services"
        ],
        answer: 1
    },

    {
        question: "Which three security principles are specifically mentioned in the introduction to Cloud Security?",
        options: [
            "Authentication, Authorization, Accounting",
            "Confidentiality, Integrity, Availability",
            "Detection, Exploitation, Recovery",
            "Privacy, Speed, Performance"
        ],
        answer: 1
    },

    {
        question: "Under the Shared Responsibility Model, who generally secures physical data centers?",
        options: [
            "The customer",
            "The cloud provider",
            "The end user",
            "The application developer only"
        ],
        answer: 1
    },

    {
        question: "Who is generally responsible for configuring IAM policies and enabling MFA?",
        options: [
            "Cloud customer",
            "Physical data center operator only",
            "Internet service provider",
            "Domain registrar"
        ],
        answer: 0
    },

    {
        question: "In an IaaS environment, who is generally responsible for securing the operating system?",
        options: [
            "Cloud provider",
            "Customer",
            "Domain registrar",
            "Internet service provider"
        ],
        answer: 1
    },

    {
        question: "In a PaaS environment, which responsibility generally belongs to the customer?",
        options: [
            "Physical data center security",
            "Hypervisor maintenance",
            "Application and data security",
            "Physical server manufacturing"
        ],
        answer: 2
    },

    {
        question: "In SaaS, what does the customer primarily remain responsible for securing?",
        options: [
            "Physical servers",
            "Hypervisors",
            "User accounts and data access",
            "Data center buildings"
        ],
        answer: 2
    },

    {
        question: "Which cloud security component controls who can access resources and what actions they can perform?",
        options: [
            "IAM",
            "DNS",
            "NTP",
            "FTP"
        ],
        answer: 0
    },

    {
        question: "A company groups developers together and assigns common permissions to the group. Which IAM concept is being used?",
        options: [
            "Users",
            "Groups",
            "Encryption keys",
            "Audit logs"
        ],
        answer: 1
    },

    {
        question: "Which IAM component defines a set of permissions that can be temporarily assigned to users or services?",
        options: [
            "Groups",
            "Roles",
            "Audit Logs",
            "Security Groups"
        ],
        answer: 1
    },

    {
        question: "A developer only needs permission to read files but also receives permission to delete all cloud resources. Which security principle has been violated?",
        options: [
            "Zero Trust",
            "Least Privilege",
            "Data Classification",
            "Network Segmentation"
        ],
        answer: 1
    },

    {
        question: "Information stored on cloud disks, databases, and backups is called:",
        options: [
            "Data in Transit",
            "Data at Rest",
            "Data in Motion Only",
            "Public Data"
        ],
        answer: 1
    },

    {
        question: "Data moving between two cloud applications is classified as:",
        options: [
            "Data at Rest",
            "Data in Transit",
            "Restricted Storage",
            "Archived Data"
        ],
        answer: 1
    },

    {
        question: "Which technology is specifically mentioned for protecting data in transit?",
        options: [
            "TLS",
            "WEP",
            "ARP",
            "FTP"
        ],
        answer: 0
    },

    {
        question: "Generating, storing, rotating, and protecting cryptographic keys are activities of:",
        options: [
            "Network Segmentation",
            "Key Management",
            "System Enumeration",
            "Session Management"
        ],
        answer: 1
    },

    {
        question: "Why is proper key management important?",
        options: [
            "It increases the number of cloud users",
            "Poor key management can weaken even strong encryption",
            "It automatically removes all malware",
            "It replaces all access controls"
        ],
        answer: 1
    },

    {
        question: "An organization categorizes information as Public, Internal, Confidential, and Restricted. This process is:",
        options: [
            "Data Classification",
            "Network Segmentation",
            "Privilege Escalation",
            "Session Management"
        ],
        answer: 0
    },

    {
        question: "What is the purpose of cloud Security Groups?",
        options: [
            "To store passwords",
            "To control inbound and outbound network traffic",
            "To encrypt every database automatically",
            "To manage employee salaries"
        ],
        answer: 1
    },

    {
        question: "Dividing a network into smaller isolated sections is known as:",
        options: [
            "Network Segmentation",
            "Data Classification",
            "Credential Access",
            "Persistence"
        ],
        answer: 0
    },

    {
        question: "What is a major security benefit of network segmentation?",
        options: [
            "It increases attacker movement",
            "It limits attacker movement between network sections",
            "It removes the need for authentication",
            "It disables audit logging"
        ],
        answer: 1
    },

    {
        question: "Which statement best describes the Zero Trust concept?",
        options: [
            "Trust every internal user",
            "Never Trust, Always Verify",
            "Trust devices connected to Wi-Fi",
            "Allow access without verification"
        ],
        answer: 1
    },

    {
        question: "Under Zero Trust, when should a user, device, or request be verified?",
        options: [
            "Only during initial installation",
            "Before access is granted",
            "Only after a security incident",
            "Only when using public Wi-Fi"
        ],
        answer: 1
    },

    {
        question: "What is the main purpose of security monitoring in cloud environments?",
        options: [
            "To detect suspicious activities and anomalies",
            "To delete all audit logs",
            "To disable user accounts permanently",
            "To increase storage costs"
        ],
        answer: 0
    },

    {
        question: "Which information can be recorded in cloud audit logs?",
        options: [
            "Login attempts and configuration changes",
            "Only monitor brightness",
            "Only keyboard layouts",
            "Only internet speed"
        ],
        answer: 0
    },

    {
        question: "Which AWS service records API activity and user actions?",
        options: [
            "CloudTrail",
            "IAM Groups",
            "Security Groups",
            "Amazon Route 53 only"
        ],
        answer: 0
    },

    {
        question: "A SIEM system collects and analyzes security logs from multiple sources. What is a major benefit?",
        options: [
            "Centralized monitoring and threat detection",
            "Automatic removal of all vulnerabilities",
            "Unlimited user permissions",
            "Disabling cloud backups"
        ],
        answer: 0
    },

    {
        question: "A cloud storage bucket is accidentally configured for public access. Which risk does this represent?",
        options: [
            "Misconfigured Storage",
            "Network Segmentation",
            "Key Rotation",
            "Secure Configuration"
        ],
        answer: 0
    },

    {
        question: "A cloud employee has more permissions than required for their job. Which risk is involved?",
        options: [
            "Excessive Permissions",
            "Data in Transit",
            "Secure Backup",
            "Network Monitoring"
        ],
        answer: 0
    },

    {
        question: "A cloud account is compromised because the user has a weak password and MFA is disabled. Which risk is involved?",
        options: [
            "Weak Authentication",
            "Network Segmentation",
            "Data Classification",
            "Key Rotation"
        ],
        answer: 0
    },

    {
        question: "A cloud API exposes sensitive functions because it has poor security controls. This is:",
        options: [
            "Insecure API",
            "Secure Configuration",
            "Data Classification",
            "Backup Recovery"
        ],
        answer: 0
    },

    {
        question: "Employees use cloud applications without organizational approval. What is this called?",
        options: [
            "Shadow IT",
            "Zero Trust",
            "CloudTrail",
            "Data at Rest"
        ],
        answer: 0
    },

    {
        question: "Which practice adds an extra authentication layer beyond a password?",
        options: [
            "MFA",
            "DNS",
            "NFS",
            "FTP"
        ],
        answer: 0
    },

    {
        question: "A cloud administrator regularly reviews permissions, configurations, and activity logs. This is an example of:",
        options: [
            "Regular Auditing",
            "Lateral Movement",
            "Persistence",
            "Command Injection"
        ],
        answer: 0
    },

    {
        question: "Which cloud security practice helps ensure business continuity after data loss?",
        options: [
            "Backup and Recovery",
            "Disabling Audit Logs",
            "Excessive Permissions",
            "Public Storage"
        ],
        answer: 0
    },

    {
        question: "Which regulation is specifically listed in the PDF as a cloud compliance example for personal data protection?",
        options: [
            "GDPR",
            "SSH",
            "DNS",
            "Nmap"
        ],
        answer: 0
    },

    {
        question: "Which compliance standard is listed in the PDF in relation to healthcare?",
        options: [
            "PCI-DSS",
            "HIPAA",
            "WPA3",
            "TLS"
        ],
        answer: 1
    },

    {
        question: "Which standard is listed in the PDF for payment card data compliance?",
        options: [
            "GDPR",
            "HIPAA",
            "PCI-DSS",
            "IAM"
        ],
        answer: 2
    },

    {
        question: "What is the main purpose of cloud governance policies?",
        options: [
            "To define how cloud resources should be managed and secured",
            "To remove all user accounts",
            "To allow unlimited public access",
            "To disable security monitoring"
        ],
        answer: 0
    },

    {
        question: "A company wants to reduce unauthorized access to cloud resources. Which combination is most appropriate?",
        options: [
            "Weak passwords and excessive permissions",
            "MFA and Least Privilege",
            "Public storage and shared accounts",
            "Disabled logging and open access"
        ],
        answer: 1
    },

    {
        question: "A cloud company encrypts stored data but fails to protect the encryption keys. What is the main concern?",
        options: [
            "Strong encryption can still be weakened by poor key management",
            "Encryption automatically becomes stronger",
            "Network segmentation is unnecessary",
            "Audit logs will stop working"
        ],
        answer: 0
    }

];
