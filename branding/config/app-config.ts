/**
 * UpTax Branding Configuration
 * Este arquivo define toda a identidade visual da UpTax
 */

export const APP_CONFIG = {
  // Identidade da Aplicação
  name: "UpTax Flow",
  tagline: "AI-Powered Business Automation Platform",
  description: "Create and manage AI-powered business workflows with integrated MCP services",
  
  // URLs e Links
  website: "https://uptax.net",
  documentation: "https://docs.uptax.net",
  support: "https://support.uptax.net",
  
  // Tema e Cores
  theme: {
    primary: "#16a34a",      // Verde UpTax
    secondary: "#059669",    // Verde escuro
    accent: "#10b981",       // Verde claro
    background: "#ffffff",   // Branco
    foreground: "#111827",   // Preto
  },
  
  // Assets
  assets: {
    logo: "/branding/assets/logo.svg",
    favicon: "/branding/assets/favicon.ico",
    logoDark: "/branding/assets/logo-dark.png",
    logoLight: "/branding/assets/logo-light.png",
    socialPreview: "/branding/assets/social-preview.jpg"
  },
  
  // Features específicas da UpTax
  features: {
    mcpIntegration: true,
    n8nWorkflows: true,
    omieIntegration: true,
    niboIntegration: true,
    automatedReporting: true
  },
  
  // Configurações de MCP
  mcp: {
    catalogUrl: "/branding/config/mcp-catalog.json",
    autoDiscovery: true,
    endpoints: {
      omie: "http://localhost:3000",
      nibo: "http://localhost:3001", 
      unified: "http://localhost:3000"
    }
  }
};

export default APP_CONFIG;