// ================= TEST SETTINGS =================

const MARKS_PER_QUESTION = 2;
const TEST_TIME_MINUTES = 60;


// ================= QUESTIONS =================

const questions = [

    {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "define", "def", "fun"],
        answer: 2
    },

    {
        question: "Which data type is used to store True or False?",
        options: ["int", "str", "bool", "float"],
        answer: 2
    },

    {
        question: "Which symbol is used for comments in Python?",
        options: ["//", "/*", "#", "--"],
        answer: 2
    },

    {
        question: "Which function is used to take input from the user?",
        options: ["get()", "input()", "scan()", "read()"],
        answer: 1
    },

    {
        question: "Which function is used to display output in Python?",
        options: ["display()", "show()", "print()", "output()"],
        answer: 2
    },

    {
        question: "Which operator is used for exponentiation in Python?",
        options: ["^", "//", "**", "%%"],
        answer: 2
    },

    {
        question: "What is the correct extension of a Python file?",
        options: [".java", ".py", ".python", ".pt"],
        answer: 1
    },

    {
        question: "Which keyword is used for a conditional statement?",
        options: ["when", "check", "if", "condition"],
        answer: 2
    },

    {
        question: "Which keyword is used when the condition is false?",
        options: ["otherwise", "else", "false", "not"],
        answer: 1
    },

    {
        question: "Which loop is used to iterate over a sequence?",
        options: ["for", "repeat", "loop", "iterate"],
        answer: 0
    },

    {
        question: "Which keyword is used to exit a loop?",
        options: ["stop", "exit", "break", "close"],
        answer: 2
    },

    {
        question: "Which keyword skips the current iteration?",
        options: ["skip", "continue", "pass", "next"],
        answer: 1
    },

    {
        question: "Which data structure stores multiple values in order?",
        options: ["set", "tuple", "list", "dictionary"],
        answer: 2
    },

    {
        question: "Which data structure stores key-value pairs?",
        options: ["list", "dictionary", "tuple", "set"],
        answer: 1
    },

    {
        question: "Which symbol is used to create a list?",
        options: ["()", "{}", "[]", "<>"],
        answer: 2
    },

    {
        question: "Which symbol is used to create a tuple?",
        options: ["[]", "{}", "() ", "<>"],
        answer: 2
    },

    {
        question: "Which data type does not allow duplicate values?",
        options: ["list", "tuple", "set", "string"],
        answer: 2
    },

    {
        question: "What does len() return?",
        options: [
            "The value",
            "The length",
            "The data type",
            "The memory address"
        ],
        answer: 1
    },

    {
        question: "Which function converts a value to integer?",
        options: ["str()", "float()", "int()", "integer()"],
        answer: 2
    },

    {
        question: "Which function converts a value to string?",
        options: ["string()", "str()", "text()", "char()"],
        answer: 1
    },

    {
        question: "What is cybersecurity?",
        options: [
            "Protecting computer systems and networks",
            "Creating websites",
            "Playing games",
            "Designing graphics"
        ],
        answer: 0
    },

    {
        question: "What does CIA stand for in cybersecurity?",
        options: [
            "Computer Internet Access",
            "Confidentiality, Integrity, Availability",
            "Cyber Intelligence Agency",
            "Central Internet Authority"
        ],
        answer: 1
    },

    {
        question: "What is phishing?",
        options: [
            "A network cable",
            "A type of database",
            "A social engineering attack",
            "A programming language"
        ],
        answer: 2
    },

    {
        question: "What is malware?",
        options: [
            "Malicious software",
            "Network hardware",
            "Antivirus software",
            "Operating system"
        ],
        answer: 0
    },

    {
        question: "Which malware can replicate itself?",
        options: [
            "Trojan",
            "Virus",
            "Spyware",
            "Adware"
        ],
        answer: 1
    },

    {
        question: "What is ransomware?",
        options: [
            "Software that improves performance",
            "Malware that encrypts files and demands payment",
            "A firewall",
            "A network protocol"
        ],
        answer: 1
    },

    {
        question: "What is a firewall?",
        options: [
            "A programming language",
            "A security system that filters network traffic",
            "A type of malware",
            "A password manager"
        ],
        answer: 1
    },

    {
        question: "What does VPN stand for?",
        options: [
            "Virtual Private Network",
            "Very Protected Network",
            "Virtual Public Network",
            "Verified Private Node"
        ],
        answer: 0
    },

    {
        question: "Which protocol is commonly used for secure web browsing?",
        options: [
            "HTTP",
            "FTP",
            "HTTPS",
            "SMTP"
        ],
        answer: 2
    },

    {
        question: "Which protocol is used to resolve domain names to IP addresses?",
        options: [
            "DNS",
            "DHCP",
            "FTP",
            "SSH"
        ],
        answer: 0
    },

    {
        question: "What is an IP address?",
        options: [
            "A unique address used to identify a device on a network",
            "A password",
            "A website",
            "A software application"
        ],
        answer: 0
    },

    {
        question: "What does MAC address identify?",
        options: [
            "A website",
            "A network interface",
            "A password",
            "A domain"
        ],
        answer: 1
    },

    {
        question: "What is DoS attack?",
        options: [
            "Data Operating System",
            "Denial of Service",
            "Domain Operating Security",
            "Digital Online Service"
        ],
        answer: 1
    },

    {
        question: "What is DDoS attack?",
        options: [
            "Distributed Denial of Service",
            "Direct Data Operating System",
            "Digital Denial of Security",
            "Distributed Data Online Service"
        ],
        answer: 0
    },

    {
        question: "What is brute force attack?",
        options: [
            "Trying many possible passwords",
            "Stealing hardware",
            "Blocking a website",
            "Encrypting data"
        ],
        answer: 0
    },

    {
        question: "What is dictionary attack?",
        options: [
            "Using random IP addresses",
            "Using a list of commonly used passwords",
            "Scanning ports",
            "Encrypting files"
        ],
        answer: 1
    },

    {
        question: "What is password spraying?",
        options: [
            "Using one password against many accounts",
            "Using many passwords against one account",
            "Changing passwords frequently",
            "Encrypting passwords"
        ],
        answer: 0
    },

    {
        question: "What is credential stuffing?",
        options: [
            "Creating strong passwords",
            "Using stolen username-password combinations",
            "Scanning a network",
            "Blocking accounts"
        ],
        answer: 1
    },

    {
        question: "What is ARP spoofing?",
        options: [
            "Attacking DNS servers",
            "Sending fake ARP messages",
            "Encrypting ARP packets",
            "Blocking HTTP traffic"
        ],
        answer: 1
    },

    {
        question: "What is DNS spoofing?",
        options: [
            "Sending fake DNS responses",
            "Changing MAC addresses",
            "Blocking ports",
            "Encrypting DNS"
        ],
        answer: 0
    },

    {
        question: "What is IP spoofing?",
        options: [
            "Changing the source IP address",
            "Changing the password",
            "Changing the MAC address",
            "Changing the DNS server"
        ],
        answer: 0
    },

    {
        question: "What is sniffing?",
        options: [
            "Capturing and analyzing network traffic",
            "Deleting files",
            "Creating passwords",
            "Blocking websites"
        ],
        answer: 0
    },

    {
        question: "What is MITM attack?",
        options: [
            "Man In The Machine",
            "Man In The Middle",
            "Machine In The Middle",
            "Middle Internet Machine"
        ],
        answer: 1
    },

    {
        question: "What is hashing?",
        options: [
            "Converting data into a fixed-size value",
            "Deleting data",
            "Sending data",
            "Compressing files"
        ],
        answer: 0
    },

    {
        question: "Which of the following is a hashing algorithm?",
        options: [
            "HTTP",
            "FTP",
            "SHA-256",
            "DNS"
        ],
        answer: 2
    },

    {
        question: "What is encryption?",
        options: [
            "Converting readable data into unreadable form",
            "Deleting data",
            "Copying data",
            "Opening files"
        ],
        answer: 0
    },

    {
        question: "What is authentication?",
        options: [
            "Verifying the identity of a user",
            "Deleting a user",
            "Creating a network",
            "Scanning ports"
        ],
        answer: 0
    },

    {
        question: "What is authorization?",
        options: [
            "Checking who the user is",
            "Giving permissions to an authenticated user",
            "Encrypting passwords",
            "Blocking a user"
        ],
        answer: 1
    },

    {
        question: "What is MFA?",
        options: [
            "Multiple File Access",
            "Multi-Factor Authentication",
            "Main Firewall Access",
            "Multiple Firewall Authentication"
        ],
        answer: 1
    },

    {
        question: "Which command is commonly used to test network connectivity?",
        options: [
            "ping",
            "copy",
            "mkdir",
            "delete"
        ],
        answer: 0
    },

    {
        question: "Which tool is commonly used for network scanning?",
        options: [
            "Nmap",
            "Notepad",
            "Calculator",
            "Paint"
        ],
        answer: 0
    },

    {
        question: "Which security model focuses on confidentiality?",
        options: ["Biba", "Bell-LaPadula", "Clark-Wilson", "Brewer-Nash"],
        answer: 1
    },

    {
        question: "Which security model focuses on integrity?",
        options: ["Biba", "Bell-LaPadula", "Take-Grant", "Lattice"],
        answer: 0
    },

    {
        question: "Which technique supports non-repudiation?",
        options: ["Digital signature", "Compression", "Port scanning", "Firewall"],
        answer: 0
    },

    {
        question: "What is a weakness that can be exploited called?",
        options: ["Threat", "Payload", "Vulnerability", "Patch"],
        answer: 2
    },

    {
        question: "What is the possibility of harm when a threat exploits a weakness?",
        options: ["Risk", "Asset", "Control", "Exploit"],
        answer: 0
    },

    {
        question: "What does GRC stand for?",
        options: ["Governance, Risk, Compliance", "General Risk Control", "Global Recovery Centre", "Governance, Response, Cybersecurity"],
        answer: 0
    },

    {
        question: "Which standard is used for an Information Security Management System?",
        options: ["ISO/IEC 27001", "PCI DSS", "HIPAA", "WEP"],
        answer: 0
    },

    {
        question: "Which regulation protects personal data in the European Union?",
        options: ["SOX", "GDPR", "PCI DSS", "NIST"],
        answer: 1
    },

    {
        question: "Which standard focuses on payment card data security?",
        options: ["ISO 9001", "PCI DSS", "HIPAA", "GDPR"],
        answer: 1
    },

    {
        question: "What is the first phase in a common ethical hacking methodology?",
        options: ["Reporting", "Reconnaissance", "Eradication", "Recovery"],
        answer: 1
    },

    {
        question: "What does responsible disclosure mean?",
        options: ["Publishing passwords", "Privately reporting a vulnerability so it can be fixed", "Selling stolen data", "Testing without permission"],
        answer: 1
    },

    {
        question: "What is the main requirement before an ethical hacking test?",
        options: ["Public Wi-Fi", "Written authorization", "A social media account", "An open port"],
        answer: 1
    },

    {
        question: "What is the full form of OSINT?",
        options: ["Open System Internet Network", "Open-Source Intelligence", "Online Security Intelligence Tool", "Open Security Information Network"],
        answer: 1
    },

    {
        question: "Which type of reconnaissance uses public sources without directly contacting the target?",
        options: ["Active", "Passive", "Aggressive", "Internal"],
        answer: 1
    },

    {
        question: "Port scanning is an example of which reconnaissance type?",
        options: ["Passive", "Active", "Physical", "None"],
        answer: 1
    },

    {
        question: "What does WHOIS mainly provide?",
        options: ["Password hashes", "Domain registration information", "Wi-Fi passwords", "Running processes"],
        answer: 1
    },

    {
        question: "What does DNS stand for?",
        options: ["Domain Name System", "Digital Network Security", "Data Number Service", "Domain Network Server"],
        answer: 0
    },

    {
        question: "Which DNS record maps a domain to an IPv4 address?",
        options: ["MX", "TXT", "A", "PTR"],
        answer: 2
    },

    {
        question: "Which DNS record is used for mail servers?",
        options: ["MX", "A", "AAAA", "CNAME"],
        answer: 0
    },

    {
        question: "What is SOCMINT?",
        options: ["Social Media Intelligence", "Secure Online Communication", "System Operations Monitoring", "Social Computer Interface"],
        answer: 0
    },

    {
        question: "Which tool searches websites for accounts matching a username?",
        options: ["Sherlock", "Wireshark", "Hydra", "Autopsy"],
        answer: 0
    },

    {
        question: "Which tool visualizes relationships between entities in a graph?",
        options: ["Maltego", "Nikto", "Netcat", "John the Ripper"],
        answer: 0
    },

    {
        question: "Which tool is commonly used for subdomain and attack-surface discovery?",
        options: ["Amass", "Kismet", "Hashcat", "tcpdump"],
        answer: 0
    },

    {
        question: "Which search engine indexes internet-connected devices and services?",
        options: ["Shodan", "Bing Maps", "Sherlock", "Autopsy"],
        answer: 0
    },

    {
        question: "What is metadata?",
        options: ["The main text of a file", "Data about a file", "A type of firewall", "A network cable"],
        answer: 1
    },

    {
        question: "Which OSINT stage organizes and cleans collected data?",
        options: ["Processing", "Exploitation", "Recovery", "Containment"],
        answer: 0
    },

    {
        question: "What is the purpose of cross-checking OSINT information?",
        options: ["To increase file size", "To reduce incorrect conclusions", "To hide the source", "To disable DNS"],
        answer: 1
    },

    {
        question: "What is Nmap's full form?",
        options: ["Network Mapper", "Network Management Program", "Node Mapping", "Network Monitoring Application"],
        answer: 0
    },

    {
        question: "Which Nmap option discovers hosts without performing a port scan?",
        options: ["-sV", "-sn", "-sU", "-O"],
        answer: 1
    },

    {
        question: "Which Nmap option performs a TCP SYN scan?",
        options: ["-sT", "-sS", "-sF", "-sN"],
        answer: 1
    },

    {
        question: "Which Nmap option performs a TCP Connect scan?",
        options: ["-sT", "-sS", "-sU", "-sX"],
        answer: 0
    },

    {
        question: "Which Nmap option is used for UDP scanning?",
        options: ["-sU", "-sT", "-sV", "-sn"],
        answer: 0
    },

    {
        question: "Which Nmap option detects service versions?",
        options: ["-O", "-sV", "-Pn", "-p"],
        answer: 1
    },

    {
        question: "Which Nmap option attempts operating-system detection?",
        options: ["-O", "-sC", "-sT", "-F"],
        answer: 0
    },

    {
        question: "Which Nmap option runs the default NSE scripts?",
        options: ["-sC", "-sU", "-sn", "-p"],
        answer: 0
    },

    {
        question: "Which option runs vulnerability-category NSE scripts?",
        options: ["--script vuln", "-sT", "-O", "-Pn"],
        answer: 0
    },

    {
        question: "What does an open port indicate?",
        options: ["A service is listening", "A firewall always blocks it", "The host is switched off", "No service exists"],
        answer: 0
    },

    {
        question: "What does a filtered port usually indicate?",
        options: ["The port is definitely open", "A filter prevents Nmap from determining its state", "The port is closed", "The service is encrypted"],
        answer: 1
    },

    {
        question: "Which port is commonly used by SSH?",
        options: ["21", "22", "23", "25"],
        answer: 1
    },

    {
        question: "Which port is commonly used by HTTP?",
        options: ["53", "80", "110", "443"],
        answer: 1
    },

    {
        question: "Which port is commonly used by HTTPS?",
        options: ["80", "110", "143", "443"],
        answer: 3
    },

    {
        question: "Which scan sends FIN, PSH and URG flags?",
        options: ["NULL", "FIN", "Xmas", "SYN"],
        answer: 2
    },

    {
        question: "Which scan sends a TCP packet with no flags set?",
        options: ["NULL", "Xmas", "FIN", "Connect"],
        answer: 0
    },

    {
        question: "Which Nmap option specifies selected ports?",
        options: ["-p", "-O", "-A", "-sn"],
        answer: 0
    },

    {
        question: "What does Nmap -A enable?",
        options: ["Only UDP scanning", "Advanced detection including OS/version/scripts/traceroute", "Only host discovery", "Only output saving"],
        answer: 1
    },

    {
        question: "Which command saves normal Nmap output to a file?",
        options: ["-oN", "-sN", "-nO", "-w"],
        answer: 0
    },

    {
        question: "Which protocol is commonly used for local-network ARP discovery?",
        options: ["ARP", "SMTP", "FTP", "SSH"],
        answer: 0
    },

    {
        question: "Which tool captures and analyzes network packets?",
        options: ["Wireshark", "Gobuster", "Hydra", "Maltego"],
        answer: 0
    },

    {
        question: "Which command-line tool can capture packets on interface eth0?",
        options: ["tcpdump", "Autopsy", "Hashcat", "Nikto"],
        answer: 0
    },

    {
        question: "Which tool is commonly used for web application proxy testing?",
        options: ["Burp Suite", "Kismet", "Volatility", "nbtscan"],
        answer: 0
    },

    {
        question: "What does ZAP stand for in OWASP ZAP?",
        options: ["Zed Attack Proxy", "Zero Access Protocol", "Zone Analysis Program", "Zonal Application Protection"],
        answer: 0
    },

    {
        question: "Which tool scans web servers for common issues and unsafe files?",
        options: ["Nikto", "Sherlock", "Kismet", "Amass"],
        answer: 0
    },

    {
        question: "Which tool can discover web directories using a wordlist?",
        options: ["Gobuster", "Wireshark", "Autopsy", "Volatility"],
        answer: 0
    },

    {
        question: "Which tool is used for password hash auditing and supports GPU acceleration?",
        options: ["Hashcat", "Maltego", "Shodan", "Kismet"],
        answer: 0
    },

    {
        question: "Which tool is used to audit password hashes and is named after a famous outlaw?",
        options: ["John the Ripper", "Netcat", "Nmap", "Recon-ng"],
        answer: 0
    },

    {
        question: "Which tool is used for wireless security auditing?",
        options: ["Aircrack-ng", "Autopsy", "theHarvester", "Gobuster"],
        answer: 0
    },

    {
        question: "Which tool detects wireless networks and devices?",
        options: ["Kismet", "Hydra", "Nikto", "Amass"],
        answer: 0
    },

    {
        question: "Which tool is used for digital forensic examination?",
        options: ["Autopsy", "Burp Suite", "Wifite", "Shodan"],
        answer: 0
    },

    {
        question: "Which tool analyzes memory dumps?",
        options: ["Volatility", "Gobuster", "theHarvester", "Nmap"],
        answer: 0
    },

    {
        question: "What does SMB stand for?",
        options: ["Server Message Block", "Secure Mail Bridge", "System Management Base", "Service Mapping Bus"],
        answer: 0
    },

    {
        question: "Which port is commonly used by modern SMB?",
        options: ["53", "80", "445", "3389"],
        answer: 2
    },

    {
        question: "Which protocol is used to monitor and manage network devices?",
        options: ["SNMP", "SMTP", "HTTP", "FTP"],
        answer: 0
    },

    {
        question: "What does LDAP stand for?",
        options: ["Lightweight Directory Access Protocol", "Local Data Access Process", "Logical Device Authentication Program", "Layered Directory Application Port"],
        answer: 0
    },

    {
        question: "Which port is commonly used by SMTP server-to-server mail transfer?",
        options: ["25", "53", "110", "445"],
        answer: 0
    },

    {
        question: "Which command-line tool is used for DNS lookup?",
        options: ["dig", "Hydra", "fsstat", "msfconsole"],
        answer: 0
    },

    {
        question: "What is enumeration mainly used to discover?",
        options: ["Detailed users, shares and service information", "Only screen brightness", "Only file size", "Only CPU temperature"],
        answer: 0
    },

    {
        question: "Which protocol is commonly used for network file sharing on Unix/Linux systems?",
        options: ["NFS", "SNMP", "SMTP", "ARP"],
        answer: 0
    },

    {
        question: "What is an exploit?",
        options: ["A system weakness", "A method or code that takes advantage of a vulnerability", "A backup file", "A security policy"],
        answer: 1
    },

    {
        question: "What is a payload?",
        options: ["The weakness itself", "The action performed after successful exploitation", "A network address", "A firewall rule"],
        answer: 1
    },

    {
        question: "What is the attack surface?",
        options: ["All possible points where a target can be interacted with", "Only the CPU", "A password list", "A backup location"],
        answer: 0
    },

    {
        question: "Which exploitation type is performed over a network without local access?",
        options: ["Local", "Remote", "Physical", "Offline"],
        answer: 1
    },

    {
        question: "Which exploitation type targets a browser or PDF reader?",
        options: ["Client-side", "Local-only", "Wireless-only", "DNS"],
        answer: 0
    },

    {
        question: "Writing more data into memory than a buffer can hold is called:",
        options: ["SQL injection", "Buffer overflow", "Phishing", "Spoofing"],
        answer: 1
    },

    {
        question: "Manipulating database queries through user input is:",
        options: ["XSS", "SQL injection", "ARP spoofing", "Tailgating"],
        answer: 1
    },

    {
        question: "Executing malicious scripts in a victim's browser is:",
        options: ["XSS", "NFS", "SNMP", "WEP"],
        answer: 0
    },

    {
        question: "Improperly including local or external files is called:",
        options: ["File inclusion", "Password spraying", "Port forwarding", "Packet routing"],
        answer: 0
    },

    {
        question: "Improperly handled input becoming part of an operating-system command is:",
        options: ["Command injection", "DNS enumeration", "Hashing", "Encryption"],
        answer: 0
    },

    {
        question: "Which payload initiates a connection from the target back to the tester?",
        options: ["Bind", "Reverse", "Static", "Local"],
        answer: 1
    },

    {
        question: "Which payload opens a listening service on the target?",
        options: ["Reverse", "Bind", "Staged", "Encrypted"],
        answer: 1
    },

    {
        question: "A payload delivered in multiple parts is called:",
        options: ["Staged", "Non-staged", "Single only", "Passive"],
        answer: 0
    },

    {
        question: "What is post-exploitation?",
        options: ["Activities after successful access", "Before reconnaissance", "Only patching", "Only DNS lookup"],
        answer: 0
    },

    {
        question: "Which practice means giving users only the permissions they need?",
        options: ["Least privilege", "Open access", "Password reuse", "Default access"],
        answer: 0
    },

    {
        question: "Who created the Metasploit Framework?",
        options: ["H. D. Moore", "Linus Torvalds", "Tim Berners-Lee", "Dennis Ritchie"],
        answer: 0
    },

    {
        question: "Which company acquired Metasploit in 2009?",
        options: ["Microsoft", "Rapid7", "Cisco", "Red Hat"],
        answer: 1
    },

    {
        question: "What is the main command-line interface of Metasploit?",
        options: ["msfconsole", "msfstart", "metashell", "msfterminal"],
        answer: 0
    },

    {
        question: "Which Metasploit command searches for modules?",
        options: ["search", "findall", "locate", "grepall"],
        answer: 0
    },

    {
        question: "Which command selects a module?",
        options: ["use", "set", "run", "back"],
        answer: 0
    },

    {
        question: "Which command displays module options?",
        options: ["show options", "list ports", "show target", "view config"],
        answer: 0
    },

    {
        question: "Which option identifies the remote target host in many modules?",
        options: ["LHOST", "RHOSTS", "LPORT", "PAYLOAD"],
        answer: 1
    },

    {
        question: "Which option identifies the tester's local host address for a reverse connection?",
        options: ["RHOSTS", "RPORT", "LHOST", "TARGET"],
        answer: 2
    },

    {
        question: "Which command configures a module option?",
        options: ["set", "search", "back", "sessions"],
        answer: 0
    },

    {
        question: "Which command executes an auxiliary module?",
        options: ["run", "back", "search", "show"],
        answer: 0
    },

    {
        question: "Which command launches an exploit module?",
        options: ["exploit", "list", "clear", "help"],
        answer: 0
    },

    {
        question: "Which module type performs scanning without exploitation?",
        options: ["Auxiliary", "Exploit", "Payload", "Post"],
        answer: 0
    },

    {
        question: "Which modules are used after successful access?",
        options: ["Post", "Auxiliary", "Encoder", "Scanner only"],
        answer: 0
    },

    {
        question: "What is Meterpreter?",
        options: ["An advanced interactive payload", "A Wi-Fi protocol", "A DNS record", "A password hash"],
        answer: 0
    },

    {
        question: "Which command lists active Metasploit sessions?",
        options: ["sessions -l", "sessions -x", "show sessions all", "list -s"],
        answer: 0
    },

    {
        question: "Authentication verifies what?",
        options: ["User identity", "File size", "Network speed", "Screen resolution"],
        answer: 0
    },

    {
        question: "A password is an example of which authentication factor?",
        options: ["Something you know", "Something you have", "Something you are", "Somewhere you are"],
        answer: 0
    },

    {
        question: "A fingerprint is an example of:",
        options: ["Something you know", "Something you have", "Something you are", "Something you do"],
        answer: 2
    },

    {
        question: "A smart card is an example of:",
        options: ["Something you know", "Something you have", "Something you are", "Something you remember"],
        answer: 1
    },

    {
        question: "Combining dictionary words with numbers or symbols is:",
        options: ["Hybrid attack", "DoS attack", "MITM", "ARP attack"],
        answer: 0
    },

    {
        question: "Precomputed tables used to recover passwords from hashes are:",
        options: ["Rainbow tables", "Routing tables", "ARP tables", "DNS zones"],
        answer: 0
    },

    {
        question: "What is password hashing?",
        options: ["Converting a password into a fixed-length value", "Encrypting Wi-Fi", "Compressing a file", "Opening a port"],
        answer: 0
    },

    {
        question: "What is added to a password before hashing to defend against rainbow tables?",
        options: ["Salt", "SSID", "Payload", "Token"],
        answer: 0
    },

    {
        question: "Which listed hash algorithm produces a 128-bit digest?",
        options: ["MD5", "SHA-256", "SHA-512", "AES"],
        answer: 0
    },

    {
        question: "Which type of authentication uses a time-limited code?",
        options: ["OTP", "DNS", "ARP", "NFS"],
        answer: 0
    },

    {
        question: "Which malware self-replicates across networks without user interaction?",
        options: ["Worm", "Virus", "Adware", "Rootkit"],
        answer: 0
    },

    {
        question: "Which malware disguises itself as legitimate software?",
        options: ["Trojan horse", "Worm", "Ransomware", "Adware"],
        answer: 0
    },

    {
        question: "Which malware secretly monitors user activity?",
        options: ["Spyware", "Worm", "Virus", "Bootloader"],
        answer: 0
    },

    {
        question: "Which malware displays unwanted advertisements?",
        options: ["Adware", "Rootkit", "Ransomware", "Botnet"],
        answer: 0
    },

    {
        question: "Which malware hides malicious activity and maintains privileged access?",
        options: ["Rootkit", "Adware", "Worm", "Virus"],
        answer: 0
    },

    {
        question: "Which malware records keystrokes?",
        options: ["Keylogger", "Ransomware", "Trojan", "Worm"],
        answer: 0
    },

    {
        question: "A group of compromised computers controlled together is called:",
        options: ["Botnet", "Subnet", "Cluster", "Gateway"],
        answer: 0
    },

    {
        question: "Malware that operates mainly in memory is:",
        options: ["Fileless malware", "Adware", "Boot virus", "Macro only"],
        answer: 0
    },

    {
        question: "What does C2 mean in malware communications?",
        options: ["Command and Control", "Copy and Cache", "Control to Client", "Code and Compile"],
        answer: 0
    },

    {
        question: "Examining malware without running it is:",
        options: ["Static analysis", "Dynamic analysis", "Live exploitation", "Fuzzing"],
        answer: 0
    },

    {
        question: "Observing malware while it runs in a sandbox is:",
        options: ["Dynamic analysis", "Static analysis", "Metadata removal", "Hashing only"],
        answer: 0
    },

    {
        question: "What does IoC stand for?",
        options: ["Indicator of Compromise", "Internet of Computers", "Input of Code", "Identity of Client"],
        answer: 0
    },

    {
        question: "Social engineering mainly exploits what?",
        options: ["Human behavior", "CPU architecture", "Routing tables", "File systems"],
        answer: 0
    },

    {
        question: "Targeted phishing against a specific person or organization is:",
        options: ["Spear phishing", "Smishing", "Baiting", "Dumpster diving"],
        answer: 0
    },

    {
        question: "Phishing using phone calls is:",
        options: ["Vishing", "Smishing", "Whaling", "Spoofing"],
        answer: 0
    },

    {
        question: "Phishing using SMS messages is:",
        options: ["Smishing", "Vishing", "Tailgating", "Baiting"],
        answer: 0
    },

    {
        question: "An attack impersonating a senior executive to request money is often:",
        options: ["Business Email Compromise", "ARP spoofing", "Worm attack", "DNS tunneling"],
        answer: 0
    },

    {
        question: "Offering something attractive to trick a victim is:",
        options: ["Baiting", "Shoulder surfing", "Tailgating", "Whaling"],
        answer: 0
    },

    {
        question: "Leaving infected USB drives for people to find is:",
        options: ["USB drop attack", "Watering hole", "Vishing", "Credential stuffing"],
        answer: 0
    },

    {
        question: "Compromising a website frequently visited by a target group is:",
        options: ["Watering hole attack", "Smishing", "Brute force", "Rogue AP"],
        answer: 0
    },

    {
        question: "Following an authorized person into a restricted area is:",
        options: ["Tailgating", "Phishing", "Spoofing", "Sniffing"],
        answer: 0
    },

    {
        question: "Watching someone enter a PIN is:",
        options: ["Shoulder surfing", "Dumpster diving", "Baiting", "Vishing"],
        answer: 0
    },

    {
        question: "Searching discarded papers for sensitive information is:",
        options: ["Dumpster diving", "Tailgating", "Whaling", "Smishing"],
        answer: 0
    },

    {
        question: "Tricking a victim into revealing an OTP is:",
        options: ["OTP scam", "ARP poisoning", "Worming", "Port scanning"],
        answer: 0
    },

    {
        question: "Which emotion is commonly exploited by urgent scam messages?",
        options: ["Fear", "Patience", "Indifference", "Sleep"],
        answer: 0
    },

    {
        question: "What is the best response to an unexpected request for credentials?",
        options: ["Verify through a trusted channel", "Reply immediately", "Share OTP", "Open every attachment"],
        answer: 0
    },

    {
        question: "What does SSID identify?",
        options: ["The wireless network name", "A device password", "An IP address", "A port number"],
        answer: 0
    },

    {
        question: "What does AP stand for in Wi-Fi?",
        options: ["Access Point", "Application Port", "Authorized Password", "Active Protocol"],
        answer: 0
    },

    {
        question: "Which wireless security protocol is obsolete and weak?",
        options: ["WEP", "WPA2", "WPA3", "AES"],
        answer: 0
    },

    {
        question: "Which encryption is associated with WPA in the syllabus?",
        options: ["TKIP", "AES only", "MD5", "SHA-1"],
        answer: 0
    },

    {
        question: "Which encryption is commonly associated with WPA2?",
        options: ["AES", "RC4 only", "DES", "MD5"],
        answer: 0
    },

    {
        question: "Which is the newest protocol among these?",
        options: ["WEP", "WPA", "WPA2", "WPA3"],
        answer: 3
    },

    {
        question: "A fake Wi-Fi network that imitates a legitimate one is:",
        options: ["Evil Twin", "Rogue DNS", "Worm", "Botnet"],
        answer: 0
    },

    {
        question: "An unauthorized access point connected to a network is:",
        options: ["Rogue Access Point", "Evil Twin only", "Firewall", "Repeater"],
        answer: 0
    },

    {
        question: "Forcing wireless devices to disconnect using forged frames is:",
        options: ["Deauthentication attack", "Password spraying", "SQL injection", "DNS enumeration"],
        answer: 0
    },

    {
        question: "Changing a device's MAC address to impersonate another is:",
        options: ["MAC spoofing", "DNS spoofing", "IP routing", "Port forwarding"],
        answer: 0
    },

    {
        question: "A fake Wi-Fi login page designed to steal credentials is:",
        options: ["Captive portal attack", "WPA3", "Packet filtering", "SSID broadcast"],
        answer: 0
    }
];


// ================= VARIABLES =================

let currentQuestion = 0;

let userAnswers = new Array(questions.length).fill(null);

let timeLeft = TEST_TIME_MINUTES * 60;

let timerInterval = null;

let testStarted = false;

let studentName = "";

let rollNumber = "";


// ================= START TEST =================

function startTest() {

    const nameInput = document.getElementById("student-name");
    const rollInput = document.getElementById("roll-number");
    const error = document.getElementById("start-error");

    studentName = nameInput.value.trim();
    rollNumber = rollInput.value.trim();

    if (studentName === "" || rollNumber === "") {

        error.innerText = "Please enter your name and roll number.";

        return;
    }

    error.innerText = "";

    document.getElementById("start-screen").style.display = "none";

    document.getElementById("test-screen").style.display = "flex";

    currentQuestion = 0;

    userAnswers = new Array(questions.length).fill(null);

    timeLeft = TEST_TIME_MINUTES * 60;

    testStarted = true;

    createQuestionPalette();

    displayQuestion();

    startTimer();
}


// ================= DISPLAY QUESTION =================

function displayQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("question-number").innerText =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("question").innerText =
        question.question;

    const optionsContainer = document.getElementById("options");

    optionsContainer.innerHTML = "";


    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.innerText = option;

        button.className = "option-button";


        if (userAnswers[currentQuestion] === index) {
            button.classList.add("selected");
        }


        button.onclick = function () {

            selectAnswer(index);

        };


        optionsContainer.appendChild(button);

    });


    updatePalette();

    updateNavigationButtons();
}


// ================= SELECT ANSWER =================

function selectAnswer(answerIndex) {

    userAnswers[currentQuestion] = answerIndex;

    displayQuestion();

}


// ================= PREVIOUS QUESTION =================

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        displayQuestion();

    }

}


// ================= NEXT QUESTION =================

function nextQuestion() {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        displayQuestion();

    }

}


// ================= QUESTION PALETTE =================

function createQuestionPalette() {

    const palette = document.getElementById("question-palette");

    palette.innerHTML = "";


    for (let i = 0; i < questions.length; i++) {

        const button = document.createElement("button");

        button.innerText = i + 1;

        button.className = "palette-button";


        button.onclick = function () {

            currentQuestion = i;

            displayQuestion();

        };


        palette.appendChild(button);

    }

}


// ================= UPDATE PALETTE =================

function updatePalette() {

    const buttons =
        document.querySelectorAll(".palette-button");


    buttons.forEach((button, index) => {

        button.classList.remove("answered");
        button.classList.remove("current");


        if (userAnswers[index] !== null) {

            button.classList.add("answered");

        }


        if (index === currentQuestion) {

            button.classList.add("current");

        }

    });

}


// ================= NAVIGATION BUTTONS =================

function updateNavigationButtons() {

    const previousButton =
        document.getElementById("previous-button");

    const nextButton =
        document.getElementById("next-button");


    if (currentQuestion === 0) {

        previousButton.disabled = true;

    } else {

        previousButton.disabled = false;

    }


    if (currentQuestion === questions.length - 1) {

        nextButton.disabled = true;

    } else {

        nextButton.disabled = false;

    }

}


// ================= TIMER =================

function startTimer() {

    clearInterval(timerInterval);


    updateTimer();


    timerInterval = setInterval(function () {

        timeLeft--;

        updateTimer();


        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            alert("Time is over! Your test will be submitted automatically.");

            submitTest();

        }

    }, 1000);

}


// ================= UPDATE TIMER =================

function updateTimer() {

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;


    const formattedMinutes =
        String(minutes).padStart(2, "0");

    const formattedSeconds =
        String(seconds).padStart(2, "0");


    document.getElementById("timer").innerText =
        `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;

}


// ================= SUBMIT TEST =================

function submitTest() {

    if (!testStarted) {
        return;
    }


    const unanswered =
        userAnswers.filter(answer => answer === null).length;


    if (unanswered > 0 && timeLeft > 0) {

        const confirmSubmit =
            confirm(
                `You have ${unanswered} unanswered question(s).\n\nAre you sure you want to submit the test?`
            );


        if (!confirmSubmit) {

            return;

        }

    }


    clearInterval(timerInterval);

    testStarted = false;


    calculateResult();

}


// ================= CALCULATE RESULT =================

function calculateResult() {

    let answeredCount = 0;

    let correctCount = 0;

    let wrongCount = 0;


    questions.forEach((question, index) => {

        const userAnswer = userAnswers[index];


        if (userAnswer !== null) {

            answeredCount++;


            if (userAnswer === question.answer) {

                correctCount++;

            } else {

                wrongCount++;

            }

        }

    });


    const skippedCount =
        questions.length - answeredCount;


    const score =
        correctCount * MARKS_PER_QUESTION;


    const totalMarks =
        questions.length * MARKS_PER_QUESTION;


    const percentage =
        (score / totalMarks) * 100;


    showResult(
        answeredCount,
        skippedCount,
        correctCount,
        wrongCount,
        score,
        totalMarks,
        percentage
    );

}


// ================= SHOW RESULT =================

function showResult(
    answeredCount,
    skippedCount,
    correctCount,
    wrongCount,
    score,
    totalMarks,
    percentage
) {

    document.getElementById("test-screen").style.display =
        "none";


    document.getElementById("result-screen").style.display =
        "block";


    document.getElementById("result-name").innerText =
        studentName;


    document.getElementById("result-roll").innerText =
        rollNumber;


    document.getElementById("answered").innerText =
        `Answered: ${answeredCount}`;


    document.getElementById("skipped").innerText =
        `Skipped: ${skippedCount}`;


    document.getElementById("correct").innerText =
        `Correct: ${correctCount}`;


    document.getElementById("wrong").innerText =
        `Wrong: ${wrongCount}`;


    document.getElementById("score").innerText =
        `Score: ${score} / ${totalMarks}`;


    document.getElementById("percentage").innerText =
        `Percentage: ${percentage.toFixed(2)}%`;

}
