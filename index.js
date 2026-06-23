

require("dotenv").config();


const { App } = require("@slack/bolt");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true
});

const pingResponses = [
    "System fully operational!",
    "Reporting for duty!",
    "Ready to go!",
    "Cybra is here and ready to assist!",
    "Cybra is online and ready to help!",
    "Cybra is fully functional and ready to assist!",
    "Cybra is functioning at peak performance!",
    "Cybra is performing flawlessly!",
    "Cybra is running smoothly!",
    "Cybra is operating without any issues!",
    "All gears spinning perfectly!",
    "Cybra is functioning optimally!",
    "Cybra is functioning at optimal performance!",
    "Cybra system online and healthy!",
    "Cybra is functioning at peak performance!",
    "Beep boop! Everything looks great!"
];


app.command("/cybra-ping", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();
    const latency = Date.now() - start;

    const randomIndex = Math.floor(Math.random() * pingResponses.length);
    const randomAnswer = pingResponses[randomIndex];

    await respond({
        text: `${randomAnswer}\nLatency: ${latency}ms`
    });
});




const cyberdefinitionResponses = [
    "Cybersecurity deals with the ability to protect a system or network from attacks.",
    "Cybersecurity involves keeping information confidential, intact, and available to authorized users.",
    "Cybersecurity involves protecting systems across various fields of technology such as networks, applications, clouds, and other digital fields."
];

app.command("/cybra-cyberdefinition", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();

    const randomIndex = Math.floor(Math.random() * cyberdefinitionResponses.length);
    const randomAnswer = cyberdefinitionResponses[randomIndex];

    await respond({
        text: `${randomAnswer}`
    });
});

const phishingResponses = [
    "Phishing is a type of cyber attack that involves tricking users into providing sensitive information such as usernames, passwords, and credit card details.",
    "Phishing attacks often occur via email or text messages and can be very difficult to detect.",
    "To protect against phishing, users should be cautious when clicking on links or downloading attachments from unknown sources."
];

app.command("/cybra-phishing", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();

    const randomIndex = Math.floor(Math.random() * phishingResponses.length);
    const randomAnswer = phishingResponses[randomIndex];

    await respond({
        text: `${randomAnswer}`
    });
});

const malwareResponses = [
    "Malware is malicious software designed to harm or exploit a computer system.",
    "Malware can include viruses, worms, trojans, and other harmful programs.",
    "To protect against malware, users should keep their systems updated and avoid downloading unknown files."
];

app.command("/cybra-malware", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();

    const randomIndex = Math.floor(Math.random() * malwareResponses.length);
    const randomAnswer = malwareResponses[randomIndex];

    await respond({
        text: `${randomAnswer}`
    });
});

const ransomwareResponses = [
    "Ransomware is a type of malware that encrypts a victim's files and demands payment for the decryption key.",
    "Ransomware attacks can be very damaging and often result in significant financial losses.",
    "To protect against ransomware, users should regularly backup their data and avoid opening suspicious email attachments."
];

app.command("/cybra-ransomware", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();

    const randomIndex = Math.floor(Math.random() * ransomwareResponses.length);
    const randomAnswer = ransomwareResponses[randomIndex];

    await respond({
        text: `${randomAnswer}`
    });
});


const passwordsResponses = [
    "Passwords should be very long rather than shorter passwords.",
    "Use a combination of uppercase and lowercase letters, numbers, and special characters.",
    "Avoid using easily guessable information like birthdays or common words."
];

app.command("/cybra-passwords", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();

    const randomIndex = Math.floor(Math.random() * passwordsResponses.length);
    const randomAnswer = passwordsResponses[randomIndex];

    await respond({
        text: `${randomAnswer}`
    });
});



const multifactorauthenticationResponses = [
    "Multifactor authentication adds an extra layer of security to your accounts.",
    "It requires multiple forms of verification before granting access.",
    "This can include something you know, something you have, and something you are."
];

app.command("/cybra-mfa", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();

    const randomIndex = Math.floor(Math.random() * multifactorauthenticationResponses.length);
    const randomAnswer = multifactorauthenticationResponses[randomIndex];

    await respond({
        text: `${randomAnswer}`
    });
});

const socialengineeringResponses = [
    "Social engineering involves manipulating people into divulging confidential information.",
    "It can be difficult to detect and prevent.",
    "Common tactics include pretexting, baiting, and phishing."
];

app.command("/cybra-socialengineering", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();

    const randomIndex = Math.floor(Math.random() * socialengineeringResponses.length);
    const randomAnswer = socialengineeringResponses[randomIndex];

    await respond({
        text: `${randomAnswer}`
    });
});

const identitytheftResponses = [
    "Identity theft involves stealing someone's personal information to commit fraud.",
    "It can result in financial loss and damage to credit scores.",
    "Common methods include stealing wallets, intercepting mail, and online scams."
];

app.command("/cybra-identitytheft", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();

    const randomIndex = Math.floor(Math.random() * identitytheftResponses.length);
    const randomAnswer = identitytheftResponses[randomIndex];

    await respond({
        text: `${randomAnswer}`
    });
});


const suspiciousemailsResponses = [
    "Suspicious emails can be a sign of phishing or other cyber threats.",
    "Always verify the sender's email address and be cautious of unexpected attachments.",
    "If in doubt, contact the sender directly to confirm the legitimacy of the email."
];

app.command("/cybra-suspiciousemails", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();

    const randomIndex = Math.floor(Math.random() * suspiciousemailsResponses.length);
    const randomAnswer = suspiciousemailsResponses[randomIndex];

    await respond({
        text: `${randomAnswer}`
    });
});


const passphraseResponses = [
    "A strong passphrase is essential for protecting your accounts.",
    "Use a combination of letters, numbers, and special characters.",
    "Avoid using easily guessable information like birthdays or names."
];

app.command("/cybra-passphrase", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();

    const randomIndex = Math.floor(Math.random() * passphraseResponses.length);
    const randomAnswer = passphraseResponses[randomIndex];

    await respond({
        text: `${randomAnswer}`
    });
});
const dailycyberTipsResponses = [
    "Stay informed about the latest cybersecurity threats and trends.",
    "Regularly update your software and operating system.",
    "Use a strong, unique password for each account.",
    "Enable multifactor authentication (MFA) wherever possible.",
    "Be cautious of suspicious emails and links.",
    "Keep your antivirus software up to date.",
    "Backup your important data regularly.",
    "Avoid using public Wi-Fi for sensitive transactions.",
    "Educate yourself and others about cybersecurity best practices.",
    "Never click on suspicious links or download unknown attachments."
];

app.command("/cybra-dailytip", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();

    const randomIndex = Math.floor(Math.random() * dailycyberTipsResponses.length);
    const randomAnswer = dailycyberTipsResponses[randomIndex];

    await respond({
        text: `${randomAnswer}`
    });
});

const cyberrealWorldIncidentsResponses = [
    "The Equifax data breach exposed the personal information of 147 million consumers.",
    "The WannaCry ransomware attack affected hundreds of thousands of computers worldwide.",
    "The Target data breach compromised the credit and debit card information of 40 million customers.",
    "The Capital One data breach exposed the personal information of over 100 million customers."
];

app.command("/cybra-incidents", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();

    const randomIndex = Math.floor(Math.random() * cyberrealWorldIncidentsResponses.length);
    const randomAnswer = cyberrealWorldIncidentsResponses[randomIndex];

    await respond({
        text: `${randomAnswer}`
    });
});


const cyberCareerExamplesResponses = [
    "Cybersecurity analysts monitor and protect computer systems from threats.",
    "Ethical hackers test systems for vulnerabilities to improve security.",
    "Security consultants advise organizations on best practices and solutions.",
    "Incident responders investigate and resolve security breaches.",
    "Security engineers design and implement security solutions.",
    "Security architects develop comprehensive security strategies and frameworks.",
    "Security managers oversee the implementation and maintenance of security policies.",
    "Security researchers explore new threats and develop innovative solutions.",
    "Security administrators manage and maintain security systems and protocols."
];

app.command("/cybra-careers", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();

    const randomIndex = Math.floor(Math.random() * cyberCareerExamplesResponses.length);
    const randomAnswer = cyberCareerExamplesResponses[randomIndex];

    await respond({
        text: `${randomAnswer}`
    });
});


const cyberCertificationsExamples = [
    "Certified Information Systems Security Professional (CISSP)",
    "Certified Ethical Hacker (CEH)",
    "CompTIA Security+",
    "Certified Information Security Manager (CISM)",
    "Certified Information Systems Auditor (CISA)"
];

app.command("/cybra-certifications", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();

    const randomIndex = Math.floor(Math.random() * cyberCertificationsExamples.length);
    const randomAnswer = cyberCertificationsExamples[randomIndex];

    await respond({
        text: `${randomAnswer}`
    });
});

const cyberquizExamples = [
    "What does CISSP stand for?",
    "What is the primary purpose of a firewall?",
    "What is the difference between a virus and a worm?",
    "What is the purpose of encryption in cybersecurity?",
    "What is the difference between symmetric and asymmetric encryption?",
    "What is the role of a security administrator?",
    "What is the importance of regular security updates?",
    "What are the common types of cyber attacks?",
    "How can you protect your personal information online?",
    "What is the difference between a firewall and an antivirus?",
    "What is the importance of cybersecurity awareness training?",
    "What are the best practices for creating strong passwords?",
    "What is the importance of using a VPN?",
    "What is the importance of multi-factor authentication?",
    "What is the importance of backup and recovery plans?",
    "What is the importance of incident response plans?",
    "What is the importance of network segmentation?",
    "What is the importance of secure configuration management?",
    "What is the importance of security audits?"
];

app.command("/cybra-quiz", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();

    const randomIndex = Math.floor(Math.random() * cyberquizExamples.length);
    const randomAnswer = cyberquizExamples[randomIndex];

    await respond({
        text: `${randomAnswer}`
    });
});


const cyberwordofthedayExamples = [
    "Authentication",
    "Authorization",
    "Confidentiality",
    "Integrity",
    "Availability",
    "Non-repudiation",
    "Accountability",
    "Privacy",
    "Data Protection",
    "Cybersecurity",
    "Encryption",
    "Firewall",
    "Malware",
    "Phishing",
    "Ransomware",
    "VPN",
    "Multi-factor authentication"
];

app.command("/cybra-wordoftheday", async ({ command, ack, respond }) => {
    const start = Date.now();
    ack();

    const randomIndex = Math.floor(Math.random() * cyberwordofthedayExamples.length);
    const randomAnswer = cyberwordofthedayExamples[randomIndex];

    await respond({
        text: `${randomAnswer}`
    });
});




(async () => {
    await app.start();
    console.log("bot is running!");
})();


app.command("/cybra-help", async ({ ack, respond }) => {
    await ack();
    await respond({
        text:
            `Available Commands:
/cybra-ping - Check bot latency
/cybra-cyberdefinition - Get a definition of cybersecurity
/cybra-phishing - Get information about phishing attacks
/cybra-malware - Get information about malware
/cybra-ransomware - Get information about ransomware
/cybra-passwords - Get information about passwords
/cybra-mfa - Get information about multifactor authentication
/cybra-identitytheft - Get information about identity theft
/cybra-socialengineering - Get information about social engineering
/cybra-suspiciousemails - Get information about suspicious emails
/cybra-passphrase - Get information about passphrases
/cybra-dailytip - Get a daily cybersecurity tip
/cybra-incidents - Get information about real-world cybersecurity incidents
/cybra-careers - Get information about cybersecurity careers
/cybra-certifications - Get information about cybersecurity certifications
/cybra-quiz - Take a cybersecurity quiz
/cybra-wordoftheday - Get a word of the day in cybersecurity
`
    });
});

