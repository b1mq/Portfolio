import { useState } from "react";
import Csharp from "./docs/c_sharp_basic certificate.pdf";
import Zeugins from "./docs/Zeugnis.pdf";
import PythonCert from "./docs/python_basic certificate (2).pdf";
import MyPhoto from "./assets/images/photo.jpg";
import CsharpMicrosoft from "./docs/Foundational_CSharp_Microsoft_Yehor_Tahirov.png"
import {
  Layout,
  Typography,
  Button,
  Card,
  Tag,
  Row,
  Col,
  Space,
  Avatar,
  Divider,
  Timeline,
  Drawer,
  Grid,
} from "antd";
import {
  GithubOutlined,
  BranchesOutlined,
  UserOutlined,
  ReadOutlined,
  StarOutlined,
  FolderOpenOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  BookOutlined,
  MenuOutlined,
  DownloadOutlined,
  SafetyCertificateOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const GITHUB_USERNAME = "b1mq";
const CERTIFICATES = [
  {
    title: "C# (Basic) Certificate",
    issuer: "HackerRank",
    date: "04 Sep, 2026",
    id: "F45E6B3478BE",
    file: Csharp,
    tags: ["C#", ".NET", "Algorithms", "HackerRank Verified"],
  },
  {
    title: "Python (Basic) Certificate",
    issuer: "HackerRank",
    date: "04 Sep, 2026",
    id: "42A6194ADF56",
    file: PythonCert,
    tags: ["Python", "Data Structures", "HackerRank Verified"],
  },
];

type Language = "DE" | "EN";

const REPOSITORIES = [
  {
    name: "asp-validation",
    description: {
      EN: "Custom validation extensions and pipeline behavior helpers for ASP.NET Core Web API architecture.",
      DE: "Benutzerdefinierte Validierungserweiterungen und Pipeline-Behaviors für ASP.NET Core Web API.",
    },
    tags: ["C#", "ASP.NET Core", "Validation", "Clean Architecture"],
    url: `https://github.com/${GITHUB_USERNAME}/asp-validation`,
    featured: true,
  },
  {
    name: "CinemaHikes",
    description: {
      EN: "Full-stack platform featuring ASP.NET Core Web API backend and React TypeScript client.",
      DE: "Full-Stack-Plattform mit ASP.NET Core Web API Backend und React TypeScript Client.",
    },
    tags: ["C#", "ASP.NET Core", "React", "TypeScript", "Ant Design"],
    url: `https://github.com/${GITHUB_USERNAME}`,
    featured: true,
  },
  {
    name: "TelegramBotDownloader",
    description: {
      EN: "High-performance media processing bot leveraging C# async streams and Playwright browser automation.",
      DE: "Hochleistungs-Medien-Bot mit C# async Streams und Playwright Browser-Automatisierung.",
    },
    tags: ["C#", ".NET", "Playwright", "Automation"],
    url: `https://github.com/${GITHUB_USERNAME}`,
    featured: true,
  },
  {
    name: "Project_Http",
    description: {
      EN: "REST API integration showcase consuming external NBU currency rates and third-party data providers.",
      DE: "REST-API-Integrationsprojekt zur Verarbeitung externer Währungskurse und Drittanbieter-APIs.",
    },
    tags: ["C#", "ASP.NET Core", "REST API", "HttpClient"],
    url: `https://github.com/${GITHUB_USERNAME}`,
    featured: false,
  },
];

export default function App() {
  const [lang, setLang] = useState<Language>("DE");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const screens = useBreakpoint();

  const isMobile = !screens.md;

  const scrollToSection = (id: string) => {
    setDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === "DE" ? "EN" : "DE"));
  };

  return (
    <Layout
      style={{ minHeight: "100vh", background: "#080d0a", overflowX: "hidden" }}
    >
      {/* HEADER */}
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "rgba(8, 13, 10, 0.90)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #1c3326",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "0 16px" : "0 24px",
        }}
      >
        <Space size="small">
          <Avatar size="medium" src={MyPhoto} icon={<GithubOutlined />} />
          <Text
            style={{
              fontWeight: 700,
              fontSize: isMobile ? "15px" : "18px",
              color: "#f0fdf4",
            }}
          >
            Yehor Tahirov <Text style={{ color: "#10b981" }}>.dev</Text>
          </Text>
        </Space>

        {/* Desktop Menu */}
        {!isMobile && (
          <Space size="large">
            <Button
              type="text"
              style={{ color: "#d1d5db" }}
              onClick={() => scrollToSection("about")}
            >
              {lang === "DE" ? "Über mich" : "About Me"}
            </Button>
            <Button
              type="text"
              style={{ color: "#d1d5db" }}
              onClick={() => scrollToSection("education")}
            >
              {lang === "DE" ? "Bildungsweg" : "Education"}
            </Button>
            <Button
              type="text"
              style={{ color: "#d1d5db" }}
              onClick={() => scrollToSection("skills")}
            >
              {lang === "DE" ? "Kenntnisse" : "Skills"}
            </Button>
            <Button
              type="text"
              style={{ color: "#d1d5db" }}
              onClick={() => scrollToSection("repositories")}
            >
              Repositories
            </Button>
          </Space>
        )}

        <Space>
          <Button
            type="dashed"
            size={isMobile ? "small" : "middle"}
            icon={<GlobalOutlined />}
            onClick={toggleLanguage}
            style={{ color: "#10b981", borderColor: "#1c3326" }}
          >
            {lang === "DE" ? "DE / EN" : "EN / DE"}
          </Button>

          {!isMobile ? (
            <Button
              type="primary"
              icon={<GithubOutlined />}
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
            >
              GitHub
            </Button>
          ) : (
            <Button
              type="text"
              icon={
                <MenuOutlined style={{ fontSize: "20px", color: "#10b981" }} />
              }
              onClick={() => setDrawerOpen(true)}
            />
          )}
        </Space>
      </Header>

      <Drawer
        title={<Text style={{ color: "#ffffff" }}>Navigation</Text>}
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        styles={{
          body: { background: "#080d0a", padding: "24px 16px" },
          header: { background: "#0f1712", borderBottom: "1px solid #1c3326" },
        }}
      >
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          <Button
            block
            type="text"
            style={{ color: "#d1d5db", textAlign: "left", fontSize: "16px" }}
            onClick={() => scrollToSection("about")}
          >
            {lang === "DE" ? "Über mich" : "About Me"}
          </Button>
          <Button
            block
            type="text"
            style={{ color: "#d1d5db", textAlign: "left", fontSize: "16px" }}
            onClick={() => scrollToSection("education")}
          >
            {lang === "DE" ? "Bildungsweg" : "Education"}
          </Button>
          <Button
            block
            type="text"
            style={{ color: "#d1d5db", textAlign: "left", fontSize: "16px" }}
            onClick={() => scrollToSection("skills")}
          >
            {lang === "DE" ? "Kenntnisse" : "Skills"}
          </Button>
          <Button
            block
            type="text"
            style={{ color: "#d1d5db", textAlign: "left", fontSize: "16px" }}
            onClick={() => scrollToSection("repositories")}
          >
            Repositories
          </Button>
          <Divider style={{ borderColor: "#1c3326", margin: "12px 0" }} />
          <Button
            block
            type="primary"
            icon={<GithubOutlined />}
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
          >
            GitHub Profile
          </Button>
        </Space>
      </Drawer>

      <Content
        style={{
          padding: isMobile ? "0 12px" : "0 24px",
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <section
          style={{ padding: isMobile ? "40px 0 20px 0" : "70px 0 40px 0" }}
        >
          <Row gutter={[24, 24]} align="middle">
            <Col
              xs={24}
              md={16}
              style={{ textAlign: isMobile ? "center" : "left" }}
            >
              <Tag
                color="green"
                style={{
                  marginBottom: 12,
                  borderColor: "#10b981",
                  color: "#34d399",
                  fontSize: isMobile ? "11px" : "12px",
                }}
              >
                {lang === "DE"
                  ? "Bewerber Duales Studium Informatik 2027"
                  : "Duales Studium Applicant 2027"}
              </Tag>
              <Title
                level={1}
                style={{
                  fontSize: isMobile ? "28px" : "42px",
                  marginBottom: 16,
                  color: "#ffffff",
                }}
              >
                {lang === "DE" ? "Hallo, ich bin " : "Hi, I'm "}
                <Text style={{ color: "#10b981" }}>Yehor Tahirov</Text>
              </Title>
              <Paragraph
                style={{
                  fontSize: isMobile ? "14px" : "16px",
                  color: "#d1d5db",
                  lineHeight: "1.7",
                }}
              >
                {lang === "DE"
                  ? "Softwareentwickler mit Fokus auf skalierbare Backend-Systeme mit C# .NET, ASP.NET Core, Objektorientierte Programmierung (OOP) und Clean Architecture."
                  : "Software Developer focused on building robust backend systems with C# .NET, ASP.NET Core, Object-Oriented Programming (OOP), and Clean Architecture principles."}
              </Paragraph>
              <Space
                size={isMobile ? "small" : "medium"}
                style={{ marginTop: 8 }}
                wrap={isMobile}
              >
                <Button
                  type="primary"
                  size={isMobile ? "middle" : "large"}
                  icon={<FolderOpenOutlined />}
                  onClick={() => scrollToSection("repositories")}
                >
                  {lang === "DE" ? "Projekte ansehen" : "View Repositories"}
                </Button>
                <Button
                  size={isMobile ? "middle" : "large"}
                  icon={<UserOutlined />}
                  onClick={() => scrollToSection("about")}
                >
                  {lang === "DE" ? "Über mich" : "About Me"}
                </Button>
              </Space>
            </Col>

            <Col xs={24} md={8}>
              <Card
                style={{
                  background: "#0f1712",
                  borderColor: "#1c3326",
                  textAlign: "center",
                }}
              >
                <Avatar
                  size={isMobile ? 80 : 110}
                  src={MyPhoto}
                  style={{ marginBottom: 16, border: "2px solid #10b981" }}
                />
                <Title
                  level={3}
                  style={{
                    marginBottom: 4,
                    color: "#ffffff",
                    fontSize: isMobile ? "20px" : "24px",
                  }}
                >
                  Yehor Tahirov
                </Title>
                <Text type="secondary">@b1mq</Text>
                <Divider style={{ borderColor: "#1c3326", margin: "16px 0" }} />
                <Space wrap style={{ justifyContent: "center" }}>
                  <Tag color="green">C# / .NET Core</Tag>
                  <Tag color="cyan">Clean Architecture</Tag>
                </Space>
              </Card>
            </Col>
          </Row>
        </section>

        <Divider style={{ borderColor: "#1c3326" }} />

        <section id="about" style={{ padding: "30px 0" }}>
          <Title
            level={2}
            style={{
              fontSize: isMobile ? "22px" : "28px",
              marginBottom: 20,
              color: "#ffffff",
            }}
          >
            <UserOutlined style={{ color: "#10b981", marginRight: 10 }} />
            {lang === "DE" ? "Über mich" : "About Me"}
          </Title>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={16}>
              <Card
                title={
                  <span style={{ color: "#ffffff" }}>
                    {lang === "DE"
                      ? "Hintergrund & IT Step"
                      : "Background & IT Step"}
                  </span>
                }
                style={{
                  marginBottom: 24,
                  background: "#0f1712",
                  borderColor: "#1c3326",
                }}
              >
                <Paragraph
                  style={{
                    fontSize: "14px",
                    color: "#e5e7eb",
                    lineHeight: "1.8",
                  }}
                >
                  {lang === "DE"
                    ? "Ursprünglich aus Odesa (Ukraine). Meine Softwareentwicklungsreise begann an der IT Step Academy im Bereich Full-Stack Web Development."
                    : "Originally from Odesa, Ukraine. I started my software development journey at IT Step Academy specializing in Full-Stack Development."}
                </Paragraph>
              </Card>

              <Card
                title={
                  <span style={{ color: "#ffffff" }}>
                    {lang === "DE"
                      ? "Fachliteratur & Software Design"
                      : "Engineering Literature & Design"}
                  </span>
                }
                style={{ background: "#0f1712", borderColor: "#1c3326" }}
              >
                <Space align="start" size="middle">
                  <ReadOutlined
                    style={{ fontSize: "24px", color: "#10b981", marginTop: 4 }}
                  />
                  <div>
                    <Title
                      level={4}
                      style={{
                        margin: 0,
                        color: "#ffffff",
                        fontSize: isMobile ? "16px" : "18px",
                      }}
                    >
                      "Clean Architecture" — Robert C. Martin (Uncle Bob)
                    </Title>
                    <Paragraph
                      style={{
                        color: "#d1d5db",
                        marginTop: 8,
                        marginBottom: 0,
                        fontSize: "14px",
                      }}
                    >
                      {lang === "DE"
                        ? "Intensiv studiert: Prinzipien der Schichtenarchitektur, Dependency Inversion, CQRS und Entkopplung von Geschäftslogik von Frameworks."
                        : "Studied architectural layer boundaries, dependency inversion principle, and decoupling domain logic from external frameworks."}
                    </Paragraph>
                  </div>
                </Space>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card
                title={
                  <span style={{ color: "#ffffff" }}>
                    {lang === "DE" ? "Sprachen" : "Languages"}
                  </span>
                }
                style={{ background: "#0f1712", borderColor: "#1c3326" }}
              >
                <Space direction="vertical" style={{ width: "100%" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text style={{ color: "#e5e7eb" }}>Ukrainisch:</Text>
                    <Tag color="green">Muttersprache</Tag>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text style={{ color: "#e5e7eb" }}>Russisch:</Text>
                    <Tag color="green">Fließend</Tag>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text style={{ color: "#e5e7eb" }}>Deutsch:</Text>
                    <Tag color="green">Gut / B2-C1</Tag>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text style={{ color: "#e5e7eb" }}>Englisch:</Text>
                    <Tag color="default">Grundkenntnisse</Tag>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </section>

        <Divider style={{ borderColor: "#1c3326" }} />

        <section id="education" style={{ padding: "30px 0" }}>
          <Text style={{ fontFamily: "monospace", color: "#10b981" }}>
            $ cat education_timeline.log
          </Text>
          <Title
            level={2}
            style={{
              fontSize: isMobile ? "22px" : "28px",
              marginTop: 8,
              marginBottom: 24,
              color: "#ffffff",
            }}
          >
            <BookOutlined style={{ color: "#10b981", marginRight: 10 }} />
            {lang === "DE"
              ? "Bildungsweg in Deutschland & Ukraine"
              : "Education & School Timeline"}
          </Title>

          <Card
            style={{
              background: "#0f1712",
              borderColor: "#1c3326",
              padding: isMobile ? "4px" : "12px",
            }}
          >
            <Timeline
              mode={isMobile ? "left" : "alternate"}
              items={[
                {
                  color: "#10b981",
                  dot: (
                    <CheckCircleOutlined
                      style={{ fontSize: "16px", color: "#10b981" }}
                    />
                  ),
                  children: (
                    <div style={{ padding: "4px 0" }}>
                      <Tag color="green">Ukraine</Tag>
                      <Title
                        level={4}
                        style={{
                          color: "#ffffff",
                          margin: "4px 0",
                          fontSize: "16px",
                        }}
                      >
                        Schule №90 Odesa (ONVK 90)
                      </Title>
                      <Text style={{ color: "#10b981", fontWeight: 600 }}>
                        Realschulabschluss
                      </Text>
                      <Paragraph
                        style={{
                          color: "#9ca3af",
                          marginTop: 4,
                          fontSize: "13px",
                        }}
                      >
                        {lang === "DE"
                          ? "Schulbildung in Odesa und Grundlagen der Informatik an der IT Step Academy."
                          : "School education in Odesa with parallel IT foundation at IT Step Academy."}
                      </Paragraph>
                    </div>
                  ),
                },
                {
                  color: "#10b981",
                  children: (
                    <div style={{ padding: "4px 0" }}>
                      <Tag color="green">2022 — 2024</Tag>
                      <Title
                        level={4}
                        style={{
                          color: "#ffffff",
                          margin: "4px 0",
                          fontSize: "16px",
                        }}
                      >
                        Gymnasium Münsingen
                      </Title>
                      <Text style={{ color: "#34d399" }}>
                        2 Jahre Gymnasiale Oberstufe
                      </Text>
                      <Paragraph
                        style={{
                          color: "#9ca3af",
                          marginTop: 4,
                          fontSize: "13px",
                        }}
                      >
                        {lang === "DE"
                          ? "Aufgrund des Krieges Unterricht am Gymnasium Münsingen in Deutschland und paralleler Online-Schulabschluss in der Ukraine."
                          : "Attended Gymnasium Münsingen in Germany while completing Ukrainian school online due to the war."}
                      </Paragraph>
                    </div>
                  ),
                },
                {
                  color: "#10b981",
                  children: (
                    <div style={{ padding: "4px 0" }}>
                      <Tag color="cyan">2024 — 2025</Tag>
                      <Title
                        level={4}
                        style={{
                          color: "#ffffff",
                          margin: "4px 0",
                          fontSize: "16px",
                        }}
                      >
                        Berufsschule Münsingen
                      </Title>
                      <Text style={{ color: "#38bdf8" }}>
                        1 Jahr Vorbereitung & Orientierung
                      </Text>
                      <Paragraph
                        style={{
                          color: "#9ca3af",
                          marginTop: 4,
                          fontSize: "13px",
                        }}
                      >
                        {lang === "DE"
                          ? "Vertiefung der deutschen Sprache, Mathematik und technischer Grundlagen."
                          : "Strengthening German language skills, mathematics, and technical foundations."}
                      </Paragraph>
                    </div>
                  ),
                },
                {
                  color: "#10b981",
                  dot: (
                    <StarOutlined
                      style={{ fontSize: "16px", color: "#10b981" }}
                    />
                  ),
                  children: (
                    <div style={{ padding: "4px 0" }}>
                      <Tag color="gold">2025 — 2027 (Aktuell)</Tag>
                      <Title
                        level={4}
                        style={{
                          color: "#ffffff",
                          margin: "4px 0",
                          fontSize: "16px",
                        }}
                      >
                        Berufskolleg Reutlingen (IB)
                      </Title>
                      <Text style={{ color: "#f59e0b", fontWeight: 700 }}>
                        BK2 Medien & Design — FachAbi
                      </Text>
                      <Paragraph
                        style={{
                          color: "#d1d5db",
                          marginTop: 4,
                          fontSize: "13px",
                        }}
                      >
                        {lang === "DE"
                          ? "Vorbereitung auf das Duale Studium Informatik (2027) mit Schwerpunkt Medien, Design und Softwareentwicklung."
                          : "Preparing for Duales Studium Informatik (2027) with focus on digital media, software engineering, and design."}
                      </Paragraph>
                    </div>
                  ),
                },
              ]}
            />
          </Card>
        </section>

        <Divider style={{ borderColor: "#1c3326" }} />

        <section id="skills" style={{ padding: "30px 0" }}>
          <Text style={{ fontFamily: "monospace", color: "#10b981" }}>
            $ ls skills/
          </Text>
          <Title
            level={2}
            style={{
              fontSize: isMobile ? "22px" : "28px",
              marginTop: 4,
              marginBottom: 20,
              color: "#ffffff",
            }}
          >
            {lang === "DE"
              ? "A toolkit built for shipping robust software."
              : "A toolkit built for shipping, not just prototyping."}
          </Title>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Card
                title={<span style={{ color: "#ffffff" }}>Languages</span>}
                style={{
                  height: "100%",
                  background: "#0f1712",
                  borderColor: "#1c3326",
                }}
              >
                <Space wrap size={[6, 8]}>
                  <Tag color="green">C#</Tag>
                  <Tag color="green">C++</Tag>
                  <Tag color="green">Python</Tag>
                  <Tag color="cyan">TypeScript</Tag>
                  <Tag color="blue">JavaScript</Tag>
                  <Tag color="orange">HTML5</Tag>
                  <Tag color="magenta">CSS3</Tag>
                  <Tag color="purple">SQL</Tag>
                </Space>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Card
                title={<span style={{ color: "#ffffff" }}>Frameworks</span>}
                style={{
                  height: "100%",
                  background: "#0f1712",
                  borderColor: "#1c3326",
                }}
              >
                <Space wrap size={[6, 8]}>
                  <Tag color="geekblue">ASP.NET Core</Tag>
                  <Tag color="geekblue">EF Core</Tag>
                  <Tag color="purple">Dapper</Tag>
                  <Tag color="cyan">React</Tag>
                  <Tag color="blue">Ant Design</Tag>
                </Space>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Card
                title={<span style={{ color: "#ffffff" }}>Architecture</span>}
                style={{
                  height: "100%",
                  background: "#0f1712",
                  borderColor: "#1c3326",
                }}
              >
                <Space wrap size={[6, 8]}>
                  <Tag color="green">Clean Architecture</Tag>
                  <Tag color="green">OOP Principles</Tag>
                  <Tag color="cyan">SOLID</Tag>
                  <Tag color="gold">CQRS & MediatR</Tag>
                  <Tag color="orange">Design Patterns</Tag>
                </Space>
              </Card>
            </Col>
          </Row>
        </section>

        <Divider style={{ borderColor: "#1c3326" }} />
        <section id="certificates" style={{ padding: "30px 0" }}>
          <Text style={{ fontFamily: "monospace", color: "#10b981" }}>
            $ ls downloads/ --verified
          </Text>
          <Title
            level={2}
            style={{
              fontSize: isMobile ? "22px" : "28px",
              marginTop: 4,
              marginBottom: 20,
              color: "#ffffff",
            }}
          >
            <SafetyCertificateOutlined
              style={{ color: "#10b981", marginRight: 10 }}
            />
            {lang === "DE"
              ? "Zertifikate & Dokumente zum Download"
              : "Certificates & Documents"}
          </Title>
          <section id="featured-cert" style={{ padding: "30px 0" }}>
            <Text style={{ fontFamily: "monospace", color: "#10b981" }}>
              $ cat certification/microsoft.json
            </Text>
            <Title
              level={2}
              style={{
                fontSize: isMobile ? "22px" : "28px",
                marginTop: 4,
                marginBottom: 20,
                color: "#ffffff",
              }}
            >
              <SafetyCertificateOutlined
                style={{ color: "#10b981", marginRight: 10 }}
              />
              {lang === "DE"
                ? "Anerkannte Zertifizierung"
                : "Featured Certification"}
            </Title>

            <Card
              style={{
                background: "#0f1712",
                borderColor: "#1c3326",
                overflow: "hidden",
                borderLeft: "4px solid #10b981",
              }}
            >
              <Row gutter={[24, 24]} align="middle">
                <Col xs={24} lg={12}>
                  <div
                    style={{
                      borderRadius: "8px",
                      overflow: "hidden",
                      border: "1px solid #1c3326",
                    }}
                  >
                    <img
                      src={CsharpMicrosoft}
                      alt="Foundational C# with Microsoft Developer Certification"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </div>
                </Col>

                <Col xs={24} lg={12}>
                  <Space wrap size={[0, 8]} style={{ marginBottom: 12 }}>
                    <Tag color="blue">Microsoft</Tag>
                    <Tag color="green">freeCodeCamp</Tag>
                    <Tag color="green">Verified Developer Certification</Tag>
                  </Space>

                  <Title
                    level={3}
                    style={{
                      color: "#ffffff",
                      margin: "4px 0 12px 0",
                      fontSize: isMobile ? "20px" : "24px",
                    }}
                  >
                    Foundational C# with Microsoft
                  </Title>

                  <Paragraph
                    style={{
                      color: "#d1d5db",
                      fontSize: "14px",
                      lineHeight: "1.7",
                    }}
                  >
                    {lang === "DE"
                      ? "Offizielles Entwickler-Zertifikat von Microsoft und freeCodeCamp. Umfasst fundamentale C#-Konzepte, objektorientierte Logik, Datenverarbeitung, Fehlerbehandlung und Konsolenanwendungen im .NET-Ökosystem."
                      : "Official developer certification co-issued by Microsoft and freeCodeCamp. Validates core C# language mechanics, object-oriented concepts, data manipulation, exception handling, and console applications in the .NET ecosystem."}
                  </Paragraph>

                  <Text
                    type="secondary"
                    style={{
                      fontSize: "12px",
                      display: "block",
                      marginBottom: 16,
                    }}
                  >
                    {lang === "DE" ? "Ausgestellt am:" : "Issued on:"} September
                    7, 2026 • Executive Director: Quincy Larson & Julia Liuson
                    (Microsoft)
                  </Text>

                  <Space wrap>
                    <Button
                      type="primary"
                      icon={<GlobalOutlined />}
                      href="https://freecodecamp.org/certification/yehortahirov/foundational-c-sharp-with-microsoft"
                      target="_blank"
                    >
                      {lang === "DE"
                        ? "Zertifikat Verifizieren"
                        : "Verify Certification"}
                    </Button>
                    <Button
                      icon={<DownloadOutlined />}
                      href="/certs/foundational_csharp_microsoft.png"
                      target="_blank"
                      download={CsharpMicrosoft}
                    >
                      {lang === "DE" ? "Bild herunterladen" : "Download Image"}
                    </Button>
                  </Space>
                </Col>
              </Row>
            </Card>
          </section>

          <Divider style={{ borderColor: "#1c3326" }} />

          {/* ZEUGNIS CARD */}
          <Card
            style={{
              background: "#0f1712",
              borderColor: "#1c3326",
              marginBottom: 24,
              borderLeft: "4px solid #10b981",
            }}
          >
            <Row gutter={[16, 16]} align="middle" justify="space-between">
              <Col xs={24} sm={16}>
                <Space align="start" size="middle">
                  <FilePdfOutlined
                    style={{ fontSize: "32px", color: "#10b981", marginTop: 4 }}
                  />
                  <div>
                    <Title
                      level={4}
                      style={{ margin: 0, color: "#ffffff", fontSize: "18px" }}
                    >
                      {lang === "DE"
                        ? "Schulzeugnisse & Notenübersicht"
                        : "School Certificates & Grades Overview"}
                    </Title>
                    <Paragraph
                      style={{
                        color: "#9ca3af",
                        margin: "4px 0 0 0",
                        fontSize: "13px",
                      }}
                    >
                      {lang === "DE"
                        ? "Offizielle Zeugnisse und Notenübersicht für die Bewerbung zum Dualen Studium Informatik."
                        : "Official school grade records and certificates for Duales Studium Informatik application."}
                    </Paragraph>
                  </div>
                </Space>
              </Col>
              <Col
                xs={24}
                sm={8}
                style={{ textAlign: isMobile ? "left" : "right" }}
              >
                <Button
                  type="primary"
                  icon={<DownloadOutlined />}
                  href={Zeugins}
                  target="_blank"
                  download="Yehor_Tahirov_Zeugins.pdf"
                >
                  {lang === "DE" ? "Zeugnis (PDF)" : "Download Zeugnis"}
                </Button>
              </Col>
            </Row>
          </Card>

          <Row gutter={[20, 20]}>
            {CERTIFICATES.map((cert) => (
              <Col xs={24} md={12} key={cert.id}>
                <Card
                  hoverable
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#0f1712",
                    borderColor: "#1c3326",
                  }}
                  actions={[
                    <a
                      key="download"
                      href={cert.file}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#34d399" }}
                    >
                      <DownloadOutlined />{" "}
                      {lang === "DE"
                        ? "Zertifikat PDF (Download)"
                        : "Download PDF"}
                    </a>,
                  ]}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 8,
                      }}
                    >
                      <Title
                        level={4}
                        style={{
                          margin: 0,
                          color: "#ffffff",
                          fontSize: "16px",
                        }}
                      >
                        {cert.title}
                      </Title>
                      <Tag color="green">{cert.issuer}</Tag>
                    </div>
                    <Text
                      type="secondary"
                      style={{
                        fontSize: "12px",
                        display: "block",
                        marginBottom: 12,
                      }}
                    >
                      {lang === "DE" ? "Ausgestellt am:" : "Earned on:"}{" "}
                      {cert.date} • ID: {cert.id}
                    </Text>
                  </div>

                  <div style={{ marginTop: 12 }}>
                    <Space wrap size={[0, 6]}>
                      {cert.tags.map((tag) => (
                        <Tag
                          key={tag}
                          style={{
                            background: "#1c3326",
                            border: "none",
                            color: "#86efac",
                            fontSize: "11px",
                          }}
                        >
                          {tag}
                        </Tag>
                      ))}
                    </Space>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* REPOSITORIES SECTION */}
        <section id="repositories" style={{ padding: "30px 0 50px 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Title
              level={2}
              style={{
                fontSize: isMobile ? "22px" : "28px",
                margin: 0,
                color: "#ffffff",
              }}
            >
              <BranchesOutlined style={{ color: "#10b981", marginRight: 10 }} />
              GitHub Repositories
            </Title>
            <Button
              type="link"
              icon={<GithubOutlined />}
              href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
              target="_blank"
              style={{ padding: isMobile ? 0 : undefined }}
            >
              {!isMobile && "View on GitHub"}
            </Button>
          </div>

          <Row gutter={[20, 20]}>
            {REPOSITORIES.map((repo) => (
              <Col xs={24} md={12} key={repo.name}>
                <Card
                  hoverable
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#0f1712",
                    borderColor: "#1c3326",
                  }}
                  actions={[
                    <a
                      key="github"
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#34d399" }}
                    >
                      <GithubOutlined /> View Repository
                    </a>,
                  ]}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 12,
                      }}
                    >
                      <Title
                        level={4}
                        style={{
                          margin: 0,
                          color: "#ffffff",
                          fontSize: "16px",
                        }}
                      >
                        {repo.name}
                      </Title>
                      {repo.featured && (
                        <Tag color="green" icon={<StarOutlined />}>
                          Featured
                        </Tag>
                      )}
                    </div>

                    <Paragraph
                      style={{
                        color: "#d1d5db",
                        fontSize: "13px",
                        minHeight: isMobile ? "auto" : "48px",
                      }}
                    >
                      {repo.description[lang]}
                    </Paragraph>
                  </div>

                  <div style={{ marginTop: 12 }}>
                    <Space wrap size={[0, 6]}>
                      {repo.tags.map((tag) => (
                        <Tag
                          key={tag}
                          style={{
                            background: "#1c3326",
                            border: "none",
                            color: "#86efac",
                            fontSize: "11px",
                          }}
                        >
                          {tag}
                        </Tag>
                      ))}
                    </Space>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Content>

      {/* FOOTER */}
      <Footer
        style={{
          textAlign: "center",
          background: "#080d0a",
          borderTop: "1px solid #1c3326",
          color: "#6b7280",
          padding: "24px 12px",
        }}
      >
        Yehor Tahirov • Duales Studium Informatik Bewerbung ©
        {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
}
