"""Generate an updated CV PDF for Aymen Bouchali from current portfolio content."""

from pathlib import Path

from fpdf import FPDF

OUT_DIR = Path(__file__).resolve().parent

ACCENT = (15, 118, 110)
INK = (15, 23, 42)
MUTED = (100, 116, 139)
LINE = (203, 213, 225)


class CV(FPDF):
    def __init__(self) -> None:
        super().__init__(format="A4", unit="mm")
        self.set_auto_page_break(auto=True, margin=12)
        self.set_margins(14, 12, 14)

    def header_band(self) -> None:
        self.set_fill_color(*ACCENT)
        self.rect(0, 0, 210, 38, "F")
        self.set_xy(14, 8)
        self.set_text_color(255, 255, 255)
        self.set_font("Helvetica", "B", 20)
        self.cell(0, 9, "AYMEN BOUCHALI", new_x="LMARGIN", new_y="NEXT")
        self.set_x(14)
        self.set_font("Helvetica", "", 11)
        self.cell(
            0,
            6,
            "Full-Stack Engineer  |  Applied AI  |  Networks & Security",
            new_x="LMARGIN",
            new_y="NEXT",
        )
        self.set_x(14)
        self.set_font("Helvetica", "", 8.5)
        self.set_text_color(226, 232, 240)
        self.cell(
            0,
            5,
            "Blida, Algeria  |  +213 5 42 62 96 45  |  aymenbouchali14@gmail.com  |  github.com/Bouchali-Aymen",
            new_x="LMARGIN",
            new_y="NEXT",
        )
        self.set_y(42)

    def section(self, title: str) -> None:
        self.set_text_color(*ACCENT)
        self.set_font("Helvetica", "B", 11)
        self.cell(0, 7, title.upper(), new_x="LMARGIN", new_y="NEXT")
        y = self.get_y()
        self.set_draw_color(*LINE)
        self.set_line_width(0.3)
        self.line(14, y, 196, y)
        self.ln(2)
        self.set_text_color(*INK)

    def job(self, title: str, place: str, dates: str, bullets: list[str]) -> None:
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(*INK)
        self.cell(120, 5, title)
        self.set_font("Helvetica", "", 8.5)
        self.set_text_color(*MUTED)
        self.cell(0, 5, dates, align="R", new_x="LMARGIN", new_y="NEXT")
        self.set_x(14)
        self.set_font("Helvetica", "I", 8.5)
        self.cell(0, 4.5, place, new_x="LMARGIN", new_y="NEXT")
        self.set_font("Helvetica", "", 8.5)
        self.set_text_color(*INK)
        for bullet in bullets:
            self.set_x(16)
            self.multi_cell(176, 4, f"- {bullet}")
        self.ln(1.2)

    def edu(self, degree: str, school: str, dates: str) -> None:
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(*INK)
        self.cell(130, 5, degree)
        self.set_font("Helvetica", "", 8.5)
        self.set_text_color(*MUTED)
        self.cell(0, 5, dates, align="R", new_x="LMARGIN", new_y="NEXT")
        self.set_x(14)
        self.set_font("Helvetica", "I", 8.5)
        self.cell(0, 4.5, school, new_x="LMARGIN", new_y="NEXT")
        self.ln(1)

    def skills_block(self, groups: list[tuple[str, str]]) -> None:
        self.set_text_color(*INK)
        for label, items in groups:
            self.set_font("Helvetica", "B", 8.5)
            self.write(4.2, f"{label}: ")
            self.set_font("Helvetica", "", 8.5)
            self.write(4.2, items)
            self.ln(5)

    def project(self, name: str, desc: str) -> None:
        self.set_font("Helvetica", "B", 9)
        self.set_text_color(*INK)
        self.cell(0, 4.5, name, new_x="LMARGIN", new_y="NEXT")
        self.set_font("Helvetica", "", 8.5)
        self.set_x(14)
        self.multi_cell(182, 4, desc)
        self.ln(0.8)


def build() -> None:
    pdf = CV()
    pdf.add_page()
    pdf.header_band()

    pdf.section("Summary")
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(*INK)
    pdf.multi_cell(
        182,
        4.2,
        "Full-stack engineer building production web platforms (Next.js, Firebase, Node.js, Laravel) "
        "with a strong background in applied machine learning - computer vision, reinforcement learning, "
        "and federated learning - and solid foundations in computer networks and cybersecurity.",
    )
    pdf.ln(2)

    pdf.section("Experience")
    pdf.job(
        "Full Stack Developer - Zed Academy",
        "Algiers, Algeria",
        "2024 - Present",
        [
            "Develop learner experience, authentication, commerce, and admin features for a national EdTech platform on Next.js and Firebase.",
            "Contribute to the public marketing site (zedacademy.net) with Next.js and Tailwind CSS.",
        ],
    )
    pdf.job(
        "Graduate Researcher - M.Sc. Computer Systems & Networks",
        "Saad Dahleb University, Blida",
        "2024 - Jun 2026",
        [
            "Master's thesis on privacy-preserving IoT malware detection using deep reinforcement learning (PPO, A2C, DQN) with hierarchical federated learning across client, fog, and cloud tiers.",
        ],
    )
    pdf.job(
        "Frontend Developer - Build Prompt",
        "Remote, United Kingdom",
        "2024 - 2025",
        [
            "Shipped production UI for an AI document-intelligence SaaS using Next.js, Nuxt.js, and Tailwind CSS in Agile collaboration with product and backend teams.",
        ],
    )
    pdf.job(
        "Full Stack Developer - OwlStack",
        "Boufarik, Blida",
        "2024 - 2025",
        [
            "Delivered client web applications end to end with Next.js, Nuxt.js, Laravel, Nest.js, and Node.js, focusing on performance, accessibility, and maintainable architecture.",
        ],
    )
    pdf.job(
        "Head of Cybersecurity - CSCC Club",
        "University Club, Blida",
        "Sep 2023 - Sep 2024",
        [
            "Led workshops and mentoring; designed and organized a campus CTF and a national CTF with participants across Algeria (web exploitation, binary exploitation, reverse engineering, forensics).",
        ],
    )
    pdf.job(
        "Undergraduate Researcher - B.Sc. Computer Science",
        "Saad Dahleb University, Blida",
        "2023",
        [
            "Built and evaluated a supervised learning pipeline for SQL injection detection, including data preparation, classical/neural models, and validation.",
        ],
    )
    pdf.job(
        "Freelance Developer",
        "Remote",
        "Before 2023",
        [
            "Delivered client web projects covering UI implementation, backend integration, and feature delivery during undergraduate studies.",
        ],
    )

    pdf.section("Education")
    pdf.edu(
        "M.Sc. Computer Systems and Networks",
        "Saad Dahleb University, Blida",
        "2024 - Jun 2026",
    )
    pdf.edu(
        "B.Sc. Computer Science",
        "Saad Dahleb University, Blida",
        "2021 - 2023",
    )

    pdf.section("Selected Projects")
    pdf.project(
        "DataPrep",
        "Annotation platform for CV datasets (Next.js + FastAPI + YOLO): review detections, draw/correct bounding boxes, and export labels for training.",
    )
    pdf.project(
        "Zed Academy Platform & Landing",
        "Production EdTech product (web.zedacademy.net) and marketing site (zedacademy.net) - Next.js, Firebase, Tailwind CSS.",
    )
    pdf.project(
        "Connected Algeria / Eventers / BuildPrompt / Mazraati",
        "National event platform, event operations tooling, AI SaaS frontend, and farm operations system across Next.js and full-stack stacks.",
    )

    pdf.section("Skills")
    pdf.skills_block(
        [
            ("Frontend", "TypeScript, JavaScript, React, Next.js, Nuxt.js, Tailwind CSS"),
            (
                "Backend & Data",
                "Node.js, Express, Nest.js, FastAPI, Laravel, PHP, Python, Firebase, MongoDB, MySQL, PostgreSQL",
            ),
            (
                "AI / ML",
                "Computer Vision, YOLO, CNNs, Supervised & Self-Supervised Learning, Reinforcement Learning, Federated Learning",
            ),
            (
                "Networks & Security",
                "Routing & Switching, VPN, DNS, Web Security, Reverse Engineering, Digital Forensics, CTF Design, Linux",
            ),
            ("Practices", "Git/GitHub, REST APIs, Agile, UI/UX"),
        ]
    )

    cv_path = OUT_DIR / "CV.pdf"
    resume_path = OUT_DIR / "Resume.pdf"
    pdf.output(str(cv_path))
    pdf.output(str(resume_path))
    print(f"wrote {cv_path} ({cv_path.stat().st_size} bytes)")
    print(f"wrote {resume_path} ({resume_path.stat().st_size} bytes)")


if __name__ == "__main__":
    build()
