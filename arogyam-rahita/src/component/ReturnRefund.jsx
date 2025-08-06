import { useState } from "react";
import { IoMenu, IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import styles from "../css/ReturnRefund.module.css";

const policyContent = {
    header: "Return & Refund Policy",
    lastUpdated: "[Insert Date]",
    intro:
        "At (Website Name), customer satisfaction is our top priority. Whether you are a retail customer purchasing for personal use or a business placing bulk orders, we strive to ensure a smooth and transparent return process that respects your time and trust.",
    sections: [
        {
            title: "1. General Return Policy",
            content:
                "We offer a flexible return policy applicable to most of our products. Products can be returned within 7 to 15 days of delivery depending on the product category. Please read the terms of return:",
            listItems: [
                "The product must be unused, unwashed, and in its original packaging with tags intact.",
                "Electronics and appliances must be returned with original accessories, warranty cards, manuals, and any bundled items.",
                "Beauty, hygiene and personal care items cannot be returned once opened due to safety concerns unless defective or damaged.",
                "Digital goods (ebooks, software keys, online courses) are non-returnable and non-refundable.",
            ],
            note: "If the item was received in a damaged, defective, or incorrect state, please initiate a return request within 48 hours of delivery with clear photo/video evidence.",
        },
        {
            title: "2. Return Process",
            content: "To initiate a return:",
            listItems: [
                "Go to My Account > Order History > Return Item.",
                "Select the item and reason for return.",
                "Upload any required media/documents.",
                "Choose a pickup or drop-off option.",
            ],
            note: "Our customer support team may contact you to verify the request. Approved returns will be scheduled for pickup within 3–5 business days.",
        },
        {
            title: "3. Refunds",
            content:
                "Refunds will be initiated once we receive and inspect the returned product. Depending on the payment method:",
            listItems: [
                "Credit/Debit Card/Net Banking: Refunds will be processed back to the original source within 5–7 business days.",
                "Cash on Delivery (COD): Refunds will be processed via bank transfer or store credit, as per your preference.",
                "Partial refunds may apply if items are missing or used, and are assessed on a case-by-case basis.",
            ],
            note: "In some cases, a restocking fee of up to 5% may apply for large or high-value products especially under the (Website Name) B2B catalogue.",
        },
        {
            title: "4. Exchange Policy (Applicable to B2C Users)",
            content:
                "We offer one-time free exchanges on select categories such as fashion and footwear. Exchanges are only valid for size or color variations of the same product and must be initiated within 7 days of delivery. Exchange approvals are subject to inventory availability.",
        },
        {
            title: "5. Return Exceptions (Non-Returnable Items)",
            listItems: [
                "Perishable goods, food, and beverages",
                "Custom-made or made-to-order items",
                "Software and downloadable content",
                "Opened hygiene products (soaps, toothbrushes, skincare)",
                "Products bought during flash sales, deal of the day, or bundled under a discount offer (unless defective)",
            ],
        },
        {
            title: "6. Special Terms for B2B Accounts",
            content: "For bulk purchases and business accounts:",
            listItems: [
                "Returns are only accepted for defective, damaged, or misdelivered.",
                "Return requests must be raised within 72 hours of delivery with supporting evidence.",
                "A formal RMA (Return Merchandise Authorization) must be requested and approved prior to shipping back.",
                "Custom orders, industrial equipment or software licenses are not eligible for returns.",
                "Credit terms or replacements may be issued based on contract terms.",
            ],
            note: "We reserve the right to refuse non-warranted items before processing refunds or issuing credits.",
        },
        {
            title: "7. Returns, Refunds & Cancellations",
            content:
                "7.1 Return and Refund policies are product-specific and displayed on each PDP.",
            listItems: [
                "7.2 Products must be returned in original condition with packaging and tags.",
                "7.3 Some items (e.g., digital downloads, personal care, custom electronics) are non-returnable.",
            ],
            note: "7.4 For business orders, cancellation and refund eligibility is subject to signed agreements or quotes.",
        },
        {
            title: "8. Cancellation Policy",
            content:
                "Orders can be cancelled before they are shipped. If the order is already in transit, you may refuse delivery or initiate a return after receiving it. Please note:",
            listItems: [
                "Prepaid order cancellations are refunded within 3-5 business days.",
                "Orders with customization or special handling are not eligible for cancellation once processed.",
            ],
        },
        {
            title: "9. How to Contact Us",
            content:
                "For assistance or queries related to returns and refunds, please reach out to:",
            listItems: [
                "📞 Customer Support: +91-XXXXXXXXXX",
                "📧 Email: support@(websitename).com | b2b@ (website name).com",
                "🕒 Live Chat: Available Mon–Sat, 10 AM–6 PM",
            ],
        },
    ],
};

const ReturnRefund = () => {
    return (
        <>
            {/* header */}
            <header className={styles.header}>
                <div className={styles.headerBox}>
                    <div className={styles.headerContainer}>
                        <div className={styles.hamburgerIcon}>
                            <IoMenu size={35} />
                        </div>
                        <div className={styles.logoContainer}>
                            <a href="#" className={styles.logoText}>
                                LOGO/NAME
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.headerInner}>
                    <ul className={styles.navList}>
                        <li>
                            <div className={styles.nav_box}>Home</div>
                        </li>
                        <li>
                            <div className={styles.nav_box}>About</div>
                        </li>
                        <li>
                            <div className={styles.nav_box}>
                                <LuUser className={styles.headerIcon} /> Login
                            </div>
                        </li>
                        <li>
                            <div className={styles.nav_box}>
                                <IoCartOutline className={styles.headerIcon} /> Cart
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
            {/* main body */}
            <div className={styles.returnPolicyContainer}>
                <p className={styles.headerTitleP}>
                    <span className={styles.homeText}>Home</span>{" "}
                    <span className={styles.icon}>›</span> <span className={styles.pText}>Return & Refund Policy</span>
                </p>
                <header className={styles.policyHeader}>
                    <h1 className={styles.policyTitle}>{policyContent.header}</h1>
                    <p className={styles.policyIntro}>{policyContent.intro}</p>
                    <p className={styles.lastUpdated}>
                        Last Updated: {policyContent.lastUpdated}
                    </p>
                </header>
                <main className={styles.policyContent}>
                    {policyContent.sections.map((section, index) => (
                        <section key={index} className={styles.policySection}>
                            <h2 className={styles.sectionTitle}>{section.title}</h2>
                            {section.content && (
                                <p className={styles.sectionContent}>{section.content}</p>
                            )}
                            {section.listItems && (
                                <ul className={styles.policyList}>
                                    {section.listItems.map((item, itemIndex) => (
                                        <li key={itemIndex} className={styles.policyListItem}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {section.note && (
                                <p className={styles.policyNote}>**{section.note}**</p>
                            )}
                        </section>
                    ))}
                </main>
            </div>
            {/* footer */}
            <footer className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <div className={`${styles.footerSection}, ${styles.logoSection}`}>
                        <h1 className={styles.logo}>LOGO</h1>
                        <p className={styles.tagline}>
                            Your trusted online store for quality products, great deals, and
                            fast, reliable delivery.
                        </p>
                    </div>

                    {/* Navigation links sections */}
                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>Account</h3>
                        <ul className={styles.navLinks}>
                            <li>
                                <a href="#">Log In</a>
                            </li>
                            <li>
                                <a href="#">Sign Up</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>Services</h3>
                        <ul className={styles.navLinks}>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Term & Condition</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">Refund & Return Policy</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>Shop</h3>
                        <ul className={styles.navLinks}>
                            <li>
                                <a href="#">Women</a>
                            </li>
                            <li>
                                <a href="#">Men</a>
                            </li>
                            <li>
                                <a href="#">Kids</a>
                            </li>
                            <li>
                                <a href="#">New Arrivals</a>
                            </li>
                            <li>
                                <a href="#">Best Sellers</a>
                            </li>
                            <li>
                                <a href="#">Sale</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright section */}
                <div className={styles.copyrightSection}>
                    <p>&copy; 2025 Name All Rights Reserved</p>
                </div>
            </footer>
        </>
    );
};

export default ReturnRefund;
