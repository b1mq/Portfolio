import React, { useState } from 'react';
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
  Timeline
} from 'antd';
import { 
  GithubOutlined, 
  CodeOutlined, 
  BranchesOutlined,
  UserOutlined,
  ReadOutlined,
  StarOutlined,
  FolderOpenOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  BookOutlined
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const GITHUB_USERNAME = 'b1mq';

type Language = 'EN' | 'DE';

const REPOSITORIES = [
  {
    name: 'asp-validation',
    description: {
      EN: 'Custom validation extensions and pipeline behavior helpers for ASP.NET Core Web API architecture.',
      DE: 'Benutzerdefinierte Validierungserweiterungen und Pipeline-Behaviors für ASP.NET Core Web API.'
    },
    tags: ['C#', 'ASP.NET Core', 'Validation', 'Clean Architecture'],
    url: `https://github.com/${GITHUB_USERNAME}/asp-validation`,
    featured: true
  },
  {
    name: 'CinemaHikes',
    description: {
      EN: 'Full-stack platform featuring ASP.NET Core Web API backend and React TypeScript client.',
      DE: 'Full-Stack-Plattform mit ASP.NET Core Web API Backend und React TypeScript Client.'
    },
    tags: ['C#', 'ASP.NET Core', 'React', 'TypeScript', 'Ant Design'],
    url: `https://github.com/${GITHUB_USERNAME}`,
    featured: true
  },
  {
    name: 'TelegramBotDownloader',
    description: {
      EN: 'High-performance media processing bot leveraging C# async streams and Playwright browser automation.',
      DE: 'Hochleistungs-Medien-Bot mit C# async Streams und Playwright Browser-Automatisierung.'
    },
    tags: ['C#', '.NET', 'Playwright', 'Automation'],
    url: `https://github.com/${GITHUB_USERNAME}`,
    featured: true
  },
  {
    name: 'Project_Http',
    description: {
      EN: 'REST API integration showcase consuming external NBU currency rates and third-party data providers.',
      DE: 'REST-API-Integrationsprojekt zur Verarbeitung externer Währungskurse und Drittanbieter-APIs.'
    },
    tags: ['C#', 'ASP.NET Core', 'REST API', 'HttpClient'],
    url: `https://github.com/${GITHUB_USERNAME}`,
    featured: false
  }
];

export default function App() {
  const [lang, setLang] = useState<Language>('DE');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'DE' ? 'EN' : 'DE'));
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#080d0a' }}>
      {/* HEADER */}
      <Header style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        background: 'rgba(8, 13, 10, 0.85)', 
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1c3326',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px'
      }}>
        <Space size="middle">
          <Avatar 
            size="medium" 
            src={`https://github.com/${GITHUB_USERNAME}.png`} 
            icon={<GithubOutlined />} 
          />
          <Text style={{ fontWeight: 700, fontSize: '18px', color: '#f0fdf4' }}>
            Yehor Tahirov <Text style={{ color: '#10b981' }}>.dev</Text>
          </Text>
        </Space>

        <Space size="large">
          <Button type="text" style={{ color: '#d1d5db' }} onClick={() => scrollToSection('about')}>
            {lang === 'DE' ? 'Über mich' : 'About Me'}
          </Button>
          <Button type="text" style={{ color: '#d1d5db' }} onClick={() => scrollToSection('education')}>
            {lang === 'DE' ? 'Bildungsweg' : 'Education'}
          </Button>
          <Button type="text" style={{ color: '#d1d5db' }} onClick={() => scrollToSection('skills')}>
            {lang === 'DE' ? 'Kenntnisse' : 'Skills'}
          </Button>
          <Button type="text" style={{ color: '#d1d5db' }} onClick={() => scrollToSection('repositories')}>
            Repositories
          </Button>
        </Space>

        <Space>
          <Button 
            type="dashed" 
            icon={<GlobalOutlined />} 
            onClick={toggleLanguage}
            style={{ color: '#10b981', borderColor: '#1c3326' }}
          >
            {lang === 'DE' ? 'DE / EN' : 'EN / DE'}
          </Button>
          <Button 
            type="primary" 
            icon={<GithubOutlined />} 
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
          >
            GitHub
          </Button>
        </Space>
      </Header>

      <Content style={{ padding: '0 24px', maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        
        {/* HERO SECTION */}
        <section style={{ padding: '70px 0 40px 0' }}>
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={16}>
              <Tag color="emerald" style={{ marginBottom: 12, borderColor: '#10b981', color: '#34d399' }}>
                {lang === 'DE' ? 'Bewerber Duales Studium Informatik 2027' : 'Duales Studium Applicant 2027'}
              </Tag>
              <Title level={1} style={{ fontSize: '42px', marginBottom: 16, color: '#ffffff' }}>
                {lang === 'DE' ? 'Hallo, ich bin ' : "Hi, I'm "}
                <Text style={{ color: '#10b981' }}>Yehor Tahirov</Text>
              </Title>
              <Paragraph style={{ fontSize: '16px', color: '#d1d5db', lineHeight: '1.7' }}>
                {lang === 'DE' 
                  ? 'Softwareentwickler mit Fokus auf skalierbare Backend-Systeme mit C# .NET, ASP.NET Core, Objektorientierte Programmierung (OOP) und Clean Architecture.'
                  : 'Software Developer focused on building robust backend systems with C# .NET, ASP.NET Core, Object-Oriented Programming (OOP), and Clean Architecture principles.'}
              </Paragraph>
              <Space size="medium" style={{ marginTop: 8 }}>
                <Button 
                  type="primary" 
                  size="large" 
                  icon={<FolderOpenOutlined />} 
                  onClick={() => scrollToSection('repositories')}
                >
                  {lang === 'DE' ? 'Projekte ansehen' : 'View Repositories'}
                </Button>
                <Button 
                  size="large" 
                  icon={<UserOutlined />} 
                  onClick={() => scrollToSection('about')}
                >
                  {lang === 'DE' ? 'Über mich' : 'About Me'}
                </Button>
              </Space>
            </Col>

            <Col xs={24} md={8}>
              <Card style={{ background: '#0f1712', borderColor: '#1c3326', textAlign: 'center' }}>
                <Avatar 
                  size={110} 
                  src={`https://github.com/${GITHUB_USERNAME}.png`} 
                  style={{ marginBottom: 16, border: '2px solid #10b981' }} 
                />
                <Title level={3} style={{ marginBottom: 4, color: '#ffffff' }}>Yehor Tahirov</Title>
                <Text type="secondary">@b1mq</Text>
                <Divider style={{ borderColor: '#1c3326', margin: '16px 0' }} />
                <Space wrap style={{ justifyContent: 'center' }}>
                  <Tag color="green">C# / .NET Core</Tag>
                  <Tag color="cyan">Clean Architecture</Tag>
                </Space>
              </Card>
            </Col>
          </Row>
        </section>

        <Divider style={{ borderColor: '#1c3326' }} />

        {/* ABOUT ME SECTION */}
        <section id="about" style={{ padding: '40px 0' }}>
          <Title level={2} style={{ fontSize: '28px', marginBottom: 24, color: '#ffffff' }}>
            <UserOutlined style={{ color: '#10b981', marginRight: 10 }} />
            {lang === 'DE' ? 'Über mich' : 'About Me'}
          </Title>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={16}>
              <Card title={<span style={{ color: '#ffffff' }}>{lang === 'DE' ? 'Hintergrund & IT Step' : 'Background & IT Step'}</span>} style={{ marginBottom: 24, background: '#0f1712', borderColor: '#1c3326' }}>
                <Paragraph style={{ fontSize: '15px', color: '#e5e7eb', lineHeight: '1.8' }}>
                  {lang === 'DE'
                    ? 'Ursprünglich aus Odesa (Ukraine). Meine Softwareentwicklungsreise begann an der IT Step Academy im Bereich Full-Stack Web Development.'
                    : 'Originally from Odesa, Ukraine. I started my software development journey at IT Step Academy specializing in Full-Stack Development.'}
                </Paragraph>
              </Card>

              <Card title={<span style={{ color: '#ffffff' }}>{lang === 'DE' ? 'Fachliteratur & Software Design' : 'Engineering Literature & Design'}</span>} style={{ background: '#0f1712', borderColor: '#1c3326' }}>
                <Space align="start" size="middle">
                  <ReadOutlined style={{ fontSize: '28px', color: '#10b981', marginTop: 4 }} />
                  <div>
                    <Title level={4} style={{ margin: 0, color: '#ffffff' }}>
                      "Clean Architecture" — Robert C. Martin (Uncle Bob)
                    </Title>
                    <Paragraph style={{ color: '#d1d5db', marginTop: 8, marginBottom: 0 }}>
                      {lang === 'DE'
                        ? 'Intensiv studiert: Prinzipien der Schichtenarchitektur, Dependency Inversion, CQRS und Entkopplung von Geschäftslogik von Frameworks.'
                        : 'Studied architectural layer boundaries, dependency inversion principle, and decoupling domain logic from external frameworks.'}
                    </Paragraph>
                  </div>
                </Space>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card title={<span style={{ color: '#ffffff' }}>{lang === 'DE' ? 'Sprachen' : 'Languages'}</span>} style={{ background: '#0f1712', borderColor: '#1c3326' }}>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#e5e7eb' }}>Ukrainisch (Українська):</Text>
                    <Tag color="green">Muttersprache</Tag>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#e5e7eb' }}>Russisch (Русский):</Text>
                    <Tag color="green">Fließend</Tag>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#e5e7eb' }}>Deutsch:</Text>
                    <Tag color="emerald">Gut / B2-C1</Tag>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#e5e7eb' }}>Englisch:</Text>
                    <Tag color="default">Grundkenntnisse</Tag>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </section>

        <Divider style={{ borderColor: '#1c3326' }} />

        {/* EDUCATION TIMELINE SECTION */}
        <section id="education" style={{ padding: '40px 0' }}>
          <Text style={{ fontFamily: 'monospace', color: '#10b981' }}>$ cat education_timeline.log</Text>
          <Title level={2} style={{ fontSize: '28px', marginTop: 8, marginBottom: 32, color: '#ffffff' }}>
            <BookOutlined style={{ color: '#10b981', marginRight: 10 }} />
            {lang === 'DE' ? 'Bildungsweg in Deutschland & Ukraine' : 'Education & School Timeline'}
          </Title>

          <Card style={{ background: '#0f1712', borderColor: '#1c3326', padding: '12px' }}>
            <Timeline
              mode="alternate"
              items={[
                {
                  color: '#10b981',
                  dot: <CheckCircleOutlined style={{ fontSize: '18px', color: '#10b981' }} />,
                  children: (
                    <div style={{ padding: '8px 0' }}>
                      <Tag color="green">Ukraine</Tag>
                      <Title level={4} style={{ color: '#ffffff', margin: '4px 0' }}>Schule №90 Odesa (ONVK 90)</Title>
                      <Text style={{ color: '#10b981', fontWeight: 600 }}>Realschulabschluss</Text>
                      <Paragraph style={{ color: '#9ca3af', marginTop: 4 }}>
                        {lang === 'DE' 
                          ? 'Schulbildung in Odesa und Grundlagen der Informatik an der IT Step Academy.' 
                          : 'School education in Odesa with parallel IT foundation at IT Step Academy.'}
                      </Paragraph>
                    </div>
                  ),
                },
                {
                  color: '#10b981',
                  children: (
                    <div style={{ padding: '8px 0' }}>
                      <Tag color="emerald">2022 — 2024</Tag>
                      <Title level={4} style={{ color: '#ffffff', margin: '4px 0' }}>Gymnasium Münsingen</Title>
                      <Text style={{ color: '#34d399' }}>2 Jahre Gymnasiale Oberstufe</Text>
                      <Paragraph style={{ color: '#9ca3af', marginTop: 4 }}>
                        {lang === 'DE'
                          ? 'Aufgrund des Krieges Unterricht am Gymnasium Münsingen in Deutschland und paralleler Online-Schulabschluss in der Ukraine.'
                          : 'Attended Gymnasium Münsingen in Germany while completing Ukrainian school online due to the war.'}
                      </Paragraph>
                    </div>
                  ),
                },
                {
                  color: '#10b981',
                  children: (
                    <div style={{ padding: '8px 0' }}>
                      <Tag color="cyan">2024 — 2025</Tag>
                      <Title level={4} style={{ color: '#ffffff', margin: '4px 0' }}>Berufsschule Münsingen</Title>
                      <Text style={{ color: '#38bdf8' }}>1 Jahr Vorbereitung & Orientierung</Text>
                      <Paragraph style={{ color: '#9ca3af', marginTop: 4 }}>
                        {lang === 'DE'
                          ? 'Vertiefung der deutschen Sprache, Mathematik und technischer Grundlagen.'
                          : 'Strengthening German language skills, mathematics, and technical foundations.'}
                      </Paragraph>
                    </div>
                  ),
                },
                {
                  color: '#10b981',
                  dot: <StarOutlined style={{ fontSize: '18px', color: '#10b981' }} />,
                  children: (
                    <div style={{ padding: '8px 0' }}>
                      <Tag color="gold">2025 — 2027 (Aktuell)</Tag>
                      <Title level={4} style={{ color: '#ffffff', margin: '4px 0' }}>Berufskolleg Reutlingen (IB)</Title>
                      <Text style={{ color: '#f59e0b', fontWeight: 700 }}>BK2 Medien & Design — Fachhochschulreife (FachAbi)</Text>
                      <Paragraph style={{ color: '#d1d5db', marginTop: 4 }}>
                        {lang === 'DE'
                          ? 'Vorbereitung auf das Duale Studium Informatik (2027) mit Schwerpunkt Medien, Design und Softwareentwicklung.'
                          : 'Preparing for Duales Studium Informatik (2027) with focus on digital media, software engineering, and design.'}
                      </Paragraph>
                    </div>
                  ),
                },
              ]}
            />
          </Card>
        </section>

        <Divider style={{ borderColor: '#1c3326' }} />

        {/* SKILLS / TOOLKIT SECTION */}
        <section id="skills" style={{ padding: '40px 0' }}>
          <Text style={{ fontFamily: 'monospace', color: '#10b981' }}>$ ls skills/</Text>
          <Title level={2} style={{ fontSize: '32px', marginTop: 4, marginBottom: 24, color: '#ffffff' }}>
            {lang === 'DE' ? 'A toolkit built for shipping robust software.' : 'A toolkit built for shipping, not just prototyping.'}
          </Title>

          <Row gutter={[16, 16]}>
            {/* Languages Card */}
            <Col xs={24} sm={12} md={8}>
              <Card title={<span style={{ color: '#ffffff' }}>Languages <Text type="secondary" style={{ fontSize: '12px' }}>core toolkit</Text></span>} style={{ height: '100%', background: '#0f1712', borderColor: '#1c3326' }}>
                <Space wrap size={[8, 10]}>
                  <Tag color="green" style={{ fontSize: '13px', padding: '4px 8px' }}>C#</Tag>
                  <Tag color="green" style={{ fontSize: '13px', padding: '4px 8px' }}>C++</Tag>
                  <Tag color="emerald" style={{ fontSize: '13px', padding: '4px 8px' }}>Python</Tag>
                  <Tag color="cyan" style={{ fontSize: '13px', padding: '4px 8px' }}>TypeScript</Tag>
                  <Tag color="blue" style={{ fontSize: '13px', padding: '4px 8px' }}>JavaScript</Tag>
                  <Tag color="orange" style={{ fontSize: '13px', padding: '4px 8px' }}>HTML5</Tag>
                  <Tag color="magenta" style={{ fontSize: '13px', padding: '4px 8px' }}>CSS3</Tag>
                  <Tag color="purple" style={{ fontSize: '13px', padding: '4px 8px' }}>SQL</Tag>
                </Space>
              </Card>
            </Col>

            {/* Frameworks & Backend Card */}
            <Col xs={24} sm={12} md={8}>
              <Card title={<span style={{ color: '#ffffff' }}>Frameworks <Text type="secondary" style={{ fontSize: '12px' }}>backend & web</Text></span>} style={{ height: '100%', background: '#0f1712', borderColor: '#1c3326' }}>
                <Space wrap size={[8, 10]}>
                  <Tag color="geekblue">ASP.NET Core</Tag>
                  <Tag color="geekblue">EF Core</Tag>
                  <Tag color="purple">Dapper</Tag>
                  <Tag color="cyan">React</Tag>
                  <Tag color="blue">Ant Design</Tag>
                  <Tag color="volcano">Playwright</Tag>
                </Space>
              </Card>
            </Col>

            {/* Architecture & Principles Card */}
            <Col xs={24} sm={12} md={8}>
              <Card title={<span style={{ color: '#ffffff' }}>Architecture <Text type="secondary" style={{ fontSize: '12px' }}>principles</Text></span>} style={{ height: '100%', background: '#0f1712', borderColor: '#1c3326' }}>
                <Space wrap size={[8, 10]}>
                  <Tag color="green">Clean Architecture</Tag>
                  <Tag color="emerald">OOP Principles</Tag>
                  <Tag color="cyan">SOLID</Tag>
                  <Tag color="gold">CQRS & MediatR</Tag>
                  <Tag color="orange">Design Patterns</Tag>
                </Space>
              </Card>
            </Col>
          </Row>
        </section>

        <Divider style={{ borderColor: '#1c3326' }} />

        {/* REPOSITORIES SECTION */}
        <section id="repositories" style={{ padding: '40px 0 60px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <Title level={2} style={{ fontSize: '28px', margin: 0, color: '#ffffff' }}>
              <BranchesOutlined style={{ color: '#10b981', marginRight: 10 }} />
              GitHub Repositories
            </Title>
            <Button 
              type="link" 
              icon={<GithubOutlined />} 
              href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`} 
              target="_blank"
            >
              View on GitHub
            </Button>
          </div>

          <Row gutter={[24, 24]}>
            {REPOSITORIES.map((repo) => (
              <Col xs={24} md={12} key={repo.name}>
                <Card 
                  hoverable
                  style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#0f1712', borderColor: '#1c3326' }}
                  actions={[
                    <a key="github" href={repo.url} target="_blank" rel="noreferrer" style={{ color: '#34d399' }}>
                      <GithubOutlined /> View Repository
                    </a>
                  ]}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <Title level={4} style={{ margin: 0, color: '#ffffff' }}>
                        {repo.name}
                      </Title>
                      {repo.featured && <Tag color="green" icon={<StarOutlined />}>Featured</Tag>}
                    </div>

                    <Paragraph style={{ color: '#d1d5db', minHeight: '48px' }}>
                      {repo.description[lang]}
                    </Paragraph>
                  </div>

                  <div style={{ marginTop: 16 }}>
                    <Space wrap size={[0, 6]}>
                      {repo.tags.map((tag) => (
                        <Tag key={tag} style={{ background: '#1c3326', border: 'none', color: '#86efac' }}>
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
      <Footer style={{ 
        textAlign: 'center', 
        background: '#080d0a', 
        borderTop: '1px solid #1c3326',
        color: '#6b7280'
      }}>
        Yehor Tahirov • Duales Studium Informatik Bewerbung ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
}