import React from 'react';
import {
    BarChart3, Zap, CreditCard, GitMerge, DatabaseZap, UserPen,
    TableColumnsSplit, PersonStanding, MessageCircle, PhoneCall,
    ShieldCheck, Send, BellRing, MessageSquareText, Paperclip,
    FileSpreadsheet
} from 'lucide-react';

const FeatureSection = ({ title, description, features, color }) => (
    <div className={`bg-${color}-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300`}>
        <div className="mb-6">
            <h3 className={`text-2xl font-bold text-${color}-900 mb-2`}>{title}</h3>
            <p className={`text-${color}-700`}>{description}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                    <div className={`p-3 bg-${color}-100 rounded-xl`}>
                        <feature.icon className={`w-6 h-6 text-${color}-600`} />
                    </div>
                    <span className={`text-${color}-800 font-medium`}>{feature.title}</span>
                </div>
            ))}
        </div>
    </div>
);

const Features = () => {
    const featureSections = [
        {
            title: "Fund & Scheme Management",
            description: "Streamline your financial operations",
            features: [
                { icon: BarChart3, title: "Flexible Scheme Creation" },
                { icon: Zap, title: "Automated Tracking" },
                { icon: FileSpreadsheet, title: "Comprehensive Reporting" },
                { icon: GitMerge, title: "Seamless Integration" }
            ]
        },
        {
            title: "Customer Experience",
            description: "Personalized interaction and management",
            features: [
                { icon: DatabaseZap, title: "Customer Database" },
                { icon: UserPen, title: "Profile Management" },
                { icon: TableColumnsSplit, title: "Customer Segmentation" },
                { icon: PersonStanding, title: "Personalized Interaction" }
            ]
        },
        {
            title: "Payment & Rewards",
            description: "Efficient financial transactions",
            features: [
                { icon: CreditCard, title: "Streamlined Payments" },
                { icon: BellRing, title: "Loyalty Points" },
                { icon: ShieldCheck, title: "Secure Transactions" },
                { icon: MessageSquareText, title: "Reward Programs" }
            ]
        },
        {
            title: "Communication & Support",
            description: "Proactive customer engagement",
            features: [
                { icon: MessageCircle, title: "Automated Notifications" },
                { icon: Send, title: "Personalized Messaging" },
                { icon: PhoneCall, title: "Inquiry Management" },
                { icon: Paperclip, title: "Follow-up Systems" }
            ]
        }
    ];

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="text-start mb-10 border-b-2 border-b-black py-2">
                    <div className="inline-flex items-center gap-2">
                        <span className="text-2xl font-semibold text-gray-700">Features</span>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {featureSections.map((section, index) => (
                        <FeatureSection key={index} {...section} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;