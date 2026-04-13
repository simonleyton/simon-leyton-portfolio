"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* ── FAQ data ─────────────────────────────────────────────── */

interface FaqEntry {
  question: string;
  answers: string[];
  followUps: string[];
}

const faqData: FaqEntry[] = [
  {
    question: "What\u2019s your design approach?",
    answers: [
      "I think in systems, not screens. I design components, patterns, and frameworks that scale across contexts. I care about the architecture behind the interface as much as the interface itself.",
      "I bridge design and business by partnering closely with PMs, engineers, and data scientists. The goal is always to connect user needs to measurable outcomes through clear, well reasoned design work.",
    ],
    followUps: [
      "What kind of work do you do?",
      "How do you think about AI and design?",
      "What are you looking for next?",
    ],
  },
  {
    question: "What kind of work do you do?",
    answers: [
      "I specialize in search, discovery, and complex information systems. I\u2019ve designed everything from search results pages and dynamic component systems to north star vision prototypes and full product redesigns.",
      "I\u2019ve worked across consumer products at companies like Zillow, Meta, Disney, and Hulu. The common thread is making complex systems feel simple and personal.",
    ],
    followUps: [
      "What\u2019s your design approach?",
      "How do you think about AI and design?",
      "Are you open to new opportunities?",
    ],
  },
  {
    question: "How do you think about AI and design?",
    answers: [
      "I see AI as a design material. I use tools like Claude, Figma Make, and coded prototypes to explore ideas faster, personalize experiences, and push the boundaries of what a product can do for its users.",
      "I\u2019m interested in both sides: using AI to improve the design process and designing AI driven product experiences. I build with AI, not just about it.",
    ],
    followUps: [
      "What kind of work do you do?",
      "What\u2019s your design approach?",
      "What are you looking for next?",
    ],
  },
  {
    question: "What are you looking for next?",
    answers: [
      "I\u2019m building toward design leadership. I study how the best design organizations operate and I\u2019m developing the skills in strategic communication, influence, and organizational design that define great design executives.",
      "I want to lead design at an organization building category defining products. If that resonates, I\u2019d love to talk.",
    ],
    followUps: [
      "What kind of work do you do?",
      "What\u2019s your design approach?",
      "How can I get in touch?",
    ],
  },
  {
    question: "Are you open to new opportunities?",
    answers: [
      "Always open to the right conversation. I\u2019m most interested in roles where design has a seat at the table and the product ambition is high.",
      "Feel free to reach out via email or LinkedIn. I\u2019m happy to chat about what you\u2019re building.",
    ],
    followUps: [
      "What are you looking for next?",
      "What kind of work do you do?",
      "How can I get in touch?",
    ],
  },
  {
    question: "How can I get in touch?",
    answers: [
      "You can reach me at hello@simonleyton.com or connect with me on LinkedIn. I\u2019m always happy to hear about interesting problems and ambitious teams.",
    ],
    followUps: [
      "What kind of work do you do?",
      "What are you looking for next?",
      "What\u2019s your design approach?",
    ],
  },
];

const initialSuggestions = [
  "What\u2019s your design approach?",
  "What kind of work do you do?",
  "How do you think about AI and design?",
  "What are you looking for next?",
  "How can I get in touch?",
];

const defaultAnswer = [
  "Thanks for your message! I\u2019d love to chat more about that. Feel free to reach out via email or LinkedIn and let\u2019s connect.",
];

/* ── Types ────────────────────────────────────────────────── */

interface ChatMessage {
  id: string;
  type: "user" | "bot";
  text: string;
}

interface ConversationPreview {
  id: string;
  date: string;
  firstMessage: string;
}

/* ── Social links ─────────────────────────────────────────── */

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/leytonsimon",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@simonleyton.com",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/simonleyton",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

/* ── Component ────────────────────────────────────────────── */

export function ContactSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "greeting", type: "bot", text: "Hey! I\u2019m Simon. Take a look around, or ask me anything." },
  ]);
  const [suggestions, setSuggestions] = useState(initialSuggestions);
  const [menuOpen, setMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversations, setConversations] = useState<ConversationPreview[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSend = useCallback(
    (question: string) => {
      if (isTyping || !question.trim()) return;

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        type: "user",
        text: question.trim(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setInputValue("");
      setIsTyping(true);

      // Find matching FAQ
      const faq = faqData.find(
        (f) => f.question.toLowerCase() === question.trim().toLowerCase()
      );
      const answers = faq ? faq.answers : defaultAnswer;
      const followUps = faq ? faq.followUps : initialSuggestions;

      // Animate bot responses with staggered delay
      answers.forEach((answer, i) => {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: `bot-${Date.now()}-${i}`,
              type: "bot",
              text: answer,
            },
          ]);
          if (i === answers.length - 1) {
            setIsTyping(false);
            setSuggestions(followUps);
          }
        }, 600 + i * 800);
      });

      // Save to conversation history
      setConversations((prev) => {
        const now = new Date();
        const dateStr = now.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
        return [
          {
            id: `conv-${Date.now()}`,
            date: dateStr,
            firstMessage: question.trim(),
          },
          ...prev,
        ];
      });
    },
    [isTyping]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(inputValue);
    }
  };

  const handleNewConversation = () => {
    setMessages([
      { id: "greeting", type: "bot", text: "Hey! I\u2019m Simon. Take a look around, or ask me anything." },
    ]);
    setSuggestions(initialSuggestions);
    setMenuOpen(false);
  };

  return (
    <section id="contact" className="py-16 tablet:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-6 md:gap-10">
          {/* Heading */}
          <div className="md:col-span-2 flex items-start">
            <h2 className="font-heading text-[30px] font-normal text-foreground">
              Contact
            </h2>
          </div>

          {/* Chat card */}
          <div
            className={cn(
              "md:col-span-4",
              "rounded-[20px] md:rounded-[30px]",
              "bg-black/[0.03] dark:bg-white/[0.06]",
              "p-5 md:p-8",
              "md:min-h-[400px]",
              "overflow-hidden"
            )}
          >
            <div className="flex flex-col h-full relative" style={{ minHeight: 500 }}>
              {/* Menu button */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="absolute top-1 left-0 z-20 w-10 h-10 flex items-center justify-center rounded-full text-black/40 dark:text-white/40 hover:text-foreground transition-all duration-200 cursor-pointer"
              >
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M1 2h18M1 10h12" />
                </svg>
              </button>

              {/* Menu overlay */}
              <div
                className={cn(
                  "absolute -inset-5 md:-inset-8 z-30",
                  "transition-opacity duration-200",
                  menuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                )}
              >
                {/* Backdrop */}
                <div
                  className={cn(
                    "absolute inset-0 transition-colors duration-300",
                    menuOpen ? "bg-black/20" : ""
                  )}
                  onClick={() => setMenuOpen(false)}
                />
                {/* Panel */}
                <div
                  className={cn(
                    "relative w-[320px] bg-white dark:bg-[#2a2a2a]",
                    "rounded-[20px] p-4 m-2",
                    "flex flex-col h-[calc(100%-16px)]",
                    "transition-transform duration-300 ease-out",
                    menuOpen ? "translate-x-0" : "-translate-x-full"
                  )}
                >
                  <div className="flex items-center justify-between pt-1 pb-4 px-3">
                    <span className="text-base font-medium text-foreground">
                      Conversations
                    </span>
                    <button
                      type="button"
                      onClick={handleNewConversation}
                      className="text-[15px] text-black/40 dark:text-white/40 hover:text-foreground transition-colors cursor-pointer"
                    >
                      New
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto space-y-1">
                    {conversations.length === 0 ? (
                      <p className="px-3 text-sm text-black/30 dark:text-white/30">
                        No conversations yet
                      </p>
                    ) : (
                      conversations.map((conv) => (
                        <button
                          key={conv.id}
                          type="button"
                          className="w-full text-left px-3 py-2.5 rounded-[12px] transition-colors cursor-pointer hover:bg-black/[0.03] dark:hover:bg-white/[0.03]"
                          onClick={() => setMenuOpen(false)}
                        >
                          <div className="text-[13px] text-black/40 dark:text-white/40 truncate">
                            {conv.date}
                          </div>
                          <div className="text-[16px] text-foreground truncate mt-0.5">
                            {conv.firstMessage}
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Chat messages area */}
              <div
                ref={chatRef}
                className="flex-1 overflow-y-auto px-1 py-4 pt-14 no-scrollbar"
              >
                <div className="flex flex-col gap-4">
                  {messages.map((msg) =>
                    msg.type === "bot" ? (
                      <div
                        key={msg.id}
                        className="flex items-end gap-2.5 animate-[bubbleIn_0.4s_ease-out_both]"
                      >
                        {/* Show avatar only for first bot message or after a user message */}
                        <Image
                          src="/images/about-light.jpg"
                          alt="Profile"
                          width={36}
                          height={36}
                          className="rounded-full object-cover w-9 h-9 shrink-0"
                        />
                        <div className="w-fit max-w-[85%] px-4 py-2.5 text-base rounded-[23px] bg-white dark:bg-white/10 text-foreground">
                          {msg.text}
                        </div>
                      </div>
                    ) : (
                      <div
                        key={msg.id}
                        className="flex justify-end animate-[bubbleIn_0.3s_ease-out_both]"
                      >
                        <div className="w-fit max-w-[85%] px-4 py-2.5 text-base rounded-[23px] bg-blue-500 text-white">
                          {msg.text}
                        </div>
                      </div>
                    )
                  )}
                  {isTyping && (
                    <div className="flex items-end gap-2.5 animate-[bubbleIn_0.3s_ease-out_both]">
                      <Image
                        src="/images/about-light.jpg"
                        alt="Profile"
                        width={36}
                        height={36}
                        className="rounded-full object-cover w-9 h-9 shrink-0"
                      />
                      <div className="w-fit px-4 py-3 rounded-[23px] bg-white dark:bg-white/10 flex gap-1">
                        <span className="w-2 h-2 bg-black/30 rounded-full animate-bounce [animation-delay:0ms]" />
                        <span className="w-2 h-2 bg-black/30 rounded-full animate-bounce [animation-delay:150ms]" />
                        <span className="w-2 h-2 bg-black/30 rounded-full animate-bounce [animation-delay:300ms]" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Suggested questions */}
              <div className="px-1 pb-3 overflow-x-auto no-scrollbar">
                <div className="flex gap-2 w-max">
                  {suggestions.map((q) => (
                    <button
                      key={q}
                      type="button"
                      disabled={isTyping}
                      onClick={() => handleSend(q)}
                      className={cn(
                        "shrink-0 rounded-full",
                        "border border-dashed border-black/15 dark:border-white/20",
                        "px-4 py-2.5 text-[16px]",
                        "text-black/50 dark:text-white/50",
                        "hover:bg-black/[0.03] dark:hover:bg-white/[0.05]",
                        "transition-colors whitespace-nowrap cursor-pointer",
                        "disabled:opacity-50 disabled:cursor-not-allowed"
                      )}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom bar: social icons + message input */}
              <div className="flex items-center gap-2 px-1">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={cn(
                      "flex items-center justify-center shrink-0",
                      "w-10 h-10 rounded-full",
                      "border border-black/10 dark:border-white/15",
                      "text-foreground/60 hover:text-foreground",
                      "transition-colors"
                    )}
                  >
                    {link.icon}
                  </a>
                ))}
                <div className="flex-1 flex items-center rounded-full bg-black/[0.04] dark:bg-white/[0.06]">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isTyping}
                    className={cn(
                      "flex-1 bg-transparent",
                      "px-5 py-2.5 text-[16px]",
                      "text-foreground placeholder:text-black/40 dark:placeholder:text-white/40",
                      "border-0 outline-none",
                      "disabled:opacity-50"
                    )}
                  />
                  {inputValue.trim() && (
                    <button
                      type="button"
                      onClick={() => handleSend(inputValue)}
                      disabled={isTyping}
                      className="pr-3 text-blue-500 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
