import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ExperiencePage } from 'pages/experience';
import { ProjectsPage } from 'pages/projects';
import { ContactPage } from 'pages/contact';
import { AboutPage } from 'pages/about';
import { LoginPage } from 'pages/login';
import { BlogPage } from 'pages/blog';
import { PageLayout } from './layouts';
import { theme } from './styles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </PageLayout>
    </ThemeProvider>
  );
}
