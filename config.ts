import {
    Envelope,
    PhoneCall,
    WhatsappLogo,
    TelegramLogo,
    MessengerLogo,
    LinkedinLogo,
    GithubLogo,
    FileText,
    YoutubeLogo,
    StackOverflowLogo,
    Calendar,
    DevToLogo,
} from '@phosphor-icons/react/dist/ssr';

import type {Config} from '@/types';
import image from '@/card-image.jpg';

export const config: Config = {
    // Set your or company name
    title: 'Nguyễn Chí Thanh',
    // Add a brief description to display below name
    bio: 'Prop Trader and Vibe Coder',
    // Select a background style
    background: 'gradient',
    cardImage: image,
    // Set your Google Analytics id to enable
    // gaId: 'G-XXXXXXXXX',
    // Localise sharing text
    shareTitle: 'Share link',
    // Set icon links to contact you to display below the header
    headerLinks: [
        {
            title: 'Email',
            id: 'email',
            url: 'mailto:chithanh85@gmail.com',
            icon: Envelope,
        },
        {
            title: 'Call',
            id: 'phone',
            url: 'tel:+84977274727',
            icon: PhoneCall,
        },
        {
            title: 'Whatsapp',
            id: 'whatsapp',
            url: 'https://wa.me/84977274727',
            icon: WhatsappLogo,
        },
        {
            title: 'Telegram',
            id: 'telegram',
            url: 'https://t.me/chithanhfx',
            icon: TelegramLogo,
        },
        {
            title: 'Messenger',
            id: 'meta-messenger',
            url: 'http://m.me/chithanhfx?text=Hello%20and%20Welcome',
            icon: MessengerLogo,
        },
    ],
    // Set main links
    mainLinks: [
        {
            id: 'cv',
            title: 'Download CV',
            url: 'https://drive.google.com/uc?export=download&id=1rQZ5gJ3yVaZ9jAfynIxdh0WQv1bb9HuI',
            icon: FileText,
        },
        {
            id: 'calendar',
            title: 'Book a call with me',
            url: 'https://calendly.com/chithanh85/30min',
            icon: Calendar,
        },
        {
            id: 'github',
            title: 'GitHub',
            url: 'https://github.com/',
            icon: GithubLogo,
        },
        {
            id: 'linkedin',
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/nguyen-chi-thanh/',
            icon: LinkedinLogo,
        },
        {
            id: 'youtube',
            title: 'Youtube channel',
            url: 'https://www.youtube.com/chithanhoiic',
            icon: YoutubeLogo,
        },
        {
            id: 'stackoverflow',
            title: 'Stack Overflow profile',
            url: 'https://example.com',
            icon: StackOverflowLogo,
        },
        {
            id: 'devto',
            title: 'Dev.to articles',
            url: 'https://dev.to/user-name',
            icon: DevToLogo,
        },
    ],
    vCard: {
        firstName: 'Thanh',
        lastName: 'Nguyen Chi',
        organization: 'PKTeam',
        title: 'Deputy CEO',
        birthday: new Date(1985, 1, 26),
        workPhone: '+8477274727',
        email: 'chithanh85@gmail.com',
        // Enable to display contact as a company
        // isOrganization: true,
    },
};
