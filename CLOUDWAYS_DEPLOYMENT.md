# Robox - Cloudways (DigitalOcean) Deployment Guide

## 📋 Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Cloudways Setup](#cloudways-setup)
- [Application Deployment](#application-deployment)
- [Domain Configuration](#domain-configuration)
- [SSL Certificate](#ssl-certificate)
- [Performance Optimization](#performance-optimization)
- [Monitoring & Maintenance](#monitoring--maintenance)
- [Troubleshooting](#troubleshooting)

## 🚀 Overview

This guide provides step-by-step instructions for deploying the Robox React application on Cloudways using DigitalOcean as the cloud provider. The deployment process includes setting up the server, configuring the application, and optimizing for production.

## ✅ Prerequisites

### Required Accounts
- **Cloudways Account**: Sign up at [cloudways.com](https://cloudways.com)
- **DigitalOcean Account**: For cloud provider (optional, can use Cloudways managed)
- **GitHub/GitLab Account**: For code repository access

### Technical Requirements
- **Node.js**: Version 18 or higher (handled by Cloudways)
- **Build Tools**: Vite build system
- **Domain Name**: For production deployment (optional)

## ☁️ Cloudways Setup

### 1. Create Cloudways Account
1. Visit [cloudways.com](https://cloudways.com)
2. Click "Start Free" or "Sign Up"
3. Complete the registration process
4. Verify your email address

### 2. Access Cloudways Dashboard
1. Log in to your Cloudways dashboard
2. Navigate to the main dashboard
3. Familiarize yourself with the interface

## 🏗️ Application Deployment

### Step 1: Create New Server

1. **Click "Add Server"**
   - In the Cloudways dashboard, click the "Add Server" button
   - Choose your preferred cloud provider (DigitalOcean recommended)

2. **Configure Server Settings**
   ```
   Server Name: robox-server
   Cloud Provider: DigitalOcean
   Server Size: 1GB RAM, 1 Core (minimum)
   Server Location: Choose closest to your target audience
   ```

3. **Select Application**
   ```
   Application Name: robox-app
   Application Type: Custom Application
   PHP Version: Not applicable (Node.js app)
   ```

### Step 2: Configure Application

1. **Access Application Settings**
   - Click on your application name
   - Navigate to "Application Settings"

2. **Configure Build Settings**
   ```bash
   # Build Command
   npm run build
   
   # Build Output Directory
   dist
   
   # Node.js Version
   18.x (or latest LTS)
   ```

3. **Set Environment Variables**
   ```bash
   # Add these in Application Settings > Environment Variables
   NODE_ENV=production
   NPM_CONFIG_PRODUCTION=false
   ```

### Step 3: Deploy from Git Repository

1. **Connect Git Repository**
   - Go to "Deployment via Git"
   - Choose your Git provider (GitHub/GitLab)
   - Connect your repository
   - Select the main branch

2. **Configure Deployment**
   ```bash
   # Repository URL
   https://github.com/yourusername/robox.git
   
   # Branch
   main
   
   # Deploy Path
   /
   ```

3. **Deploy Application**
   - Click "Deploy" to start the deployment process
   - Monitor the deployment logs
   - Wait for successful deployment

## 🌐 Domain Configuration

### Step 1: Add Domain

1. **Navigate to Domain Management**
   - Go to "Application Settings" > "Domain Management"
   - Click "Add Domain"

2. **Configure Domain**
   ```
   Domain Name: yourdomain.com
   Point to: Application
   ```

### Step 2: DNS Configuration

1. **Get Nameservers**
   - Note down the Cloudways nameservers
   - Usually in format: `ns1.cloudways.com`, `ns2.cloudways.com`

2. **Update Domain DNS**
   - Log in to your domain registrar
   - Update nameservers to Cloudways nameservers
   - Wait for DNS propagation (24-48 hours)

### Step 3: SSL Certificate

1. **Enable SSL**
   - Go to "SSL Certificate" section
   - Click "Let's Encrypt SSL"
   - Enter your domain name
   - Click "Install Certificate"

2. **Force HTTPS**
   - Enable "Force HTTPS" option
   - This ensures all traffic uses SSL

## ⚡ Performance Optimization

### Step 1: Enable CDN

1. **Configure Cloudways CDN**
   - Go to "Application Settings" > "CDN"
   - Enable Cloudways CDN
   - Configure CDN settings

2. **Custom CDN (Optional)**
   ```bash
   # If using Cloudflare
   - Sign up for Cloudflare
   - Add your domain
   - Update nameservers to Cloudflare
   - Configure SSL and caching
   ```

### Step 2: Caching Configuration

1. **Browser Caching**
   ```nginx
   # Add to .htaccess file
   <IfModule mod_expires.c>
     ExpiresActive on
     ExpiresByType text/css "access plus 1 year"
     ExpiresByType application/javascript "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/gif "access plus 1 year"
     ExpiresByType image/svg+xml "access plus 1 year"
   </IfModule>
   ```

2. **Gzip Compression**
   - Enable Gzip compression in Cloudways settings
   - This reduces file sizes for faster loading

### Step 3: Image Optimization

1. **Optimize Images**
   - Compress all images before uploading
   - Use WebP format where possible
   - Implement lazy loading

2. **Responsive Images**
   ```html
   <!-- Example responsive image -->
   <img src="image.webp" 
        srcset="image-300.webp 300w, image-600.webp 600w"
        sizes="(max-width: 360px) 300px, 600px"
        alt="Description">
   ```

## 📊 Monitoring & Maintenance

### Step 1: Set Up Monitoring

1. **Application Monitoring**
   - Enable Cloudways monitoring
   - Set up alerts for:
     - High CPU usage
     - High memory usage
     - Disk space warnings
     - Response time alerts

2. **Performance Monitoring**
   ```bash
   # Monitor key metrics
   - Page load times
   - Server response times
   - Error rates
   - User engagement
   ```

### Step 2: Regular Maintenance

1. **Security Updates**
   - Regularly update Node.js version
   - Keep dependencies updated
   - Monitor security advisories

2. **Backup Strategy**
   ```bash
   # Cloudways Backup Settings
   - Enable automatic backups
   - Set backup frequency (daily/weekly)
   - Configure backup retention
   - Test backup restoration
   ```

3. **Performance Monitoring**
   ```bash
   # Key metrics to monitor
   - Page load speed
   - Time to First Byte (TTFB)
   - Core Web Vitals
   - Ad performance metrics
   ```

## 🔧 Application-Specific Configuration

### Step 1: Environment Configuration

1. **Production Environment**
   ```bash
   # Set in Cloudways Environment Variables
   NODE_ENV=production
   VITE_APP_TITLE=Robox
   VITE_APP_DESCRIPTION=Gaming Platform
   ```

2. **Ad Configuration**
   ```json
   // Update src/utils/AdConfig.json for production
   {
     "HOME_AD": {
       "BANNER_SLOT_1": {
         "adUnit": "your-production-ad-unit"
       }
     }
   }
   ```

### Step 2: Build Optimization

1. **Vite Configuration**
   ```javascript
   // vite.config.js optimizations
   export default defineConfig({
     build: {
       rollupOptions: {
         output: {
           manualChunks: {
             vendor: ['react', 'react-dom'],
             router: ['react-router-dom']
           }
         }
       },
       minify: 'terser',
       sourcemap: false
     }
   })
   ```

2. **Bundle Analysis**
   ```bash
   # Install bundle analyzer
   npm install --save-dev rollup-plugin-visualizer
   
   # Add to vite.config.js
   import { visualizer } from 'rollup-plugin-visualizer';
   
   plugins: [
     visualizer({
       filename: 'dist/stats.html',
       open: true
     })
   ]
   ```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Check build logs
   - Review deployment logs in Cloudways
   - Verify Node.js version compatibility
   - Check for missing dependencies
   - Ensure all environment variables are set
   ```

2. **Performance Issues**
   ```bash
   # Performance debugging
   - Check server resources (CPU, RAM, Disk)
   - Monitor CDN performance
   - Analyze bundle size
   - Optimize images and assets
   ```

3. **SSL Issues**
   ```bash
   # SSL troubleshooting
   - Verify domain DNS settings
   - Check SSL certificate validity
   - Ensure HTTPS redirects are working
   - Test SSL configuration
   ```

4. **Ad Loading Issues**
   ```bash
   # Ad troubleshooting
   - Verify ad unit IDs are correct
   - Check ad network connectivity
   - Monitor ad performance metrics
   - Test ad loading in different browsers
   ```

### Debug Commands

```bash
# Check application status
ssh cloudways@your-server-ip
cd applications/robox-app/public_html
npm run build

# Check logs
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log

# Monitor resources
htop
df -h
free -m
```

## 📈 Performance Optimization Checklist

### Before Deployment
- [ ] Optimize images and assets
- [ ] Minify CSS and JavaScript
- [ ] Enable Gzip compression
- [ ] Configure browser caching
- [ ] Set up CDN

### After Deployment
- [ ] Test page load speeds
- [ ] Verify SSL certificate
- [ ] Check mobile responsiveness
- [ ] Test ad loading
- [ ] Monitor error rates

### Ongoing Maintenance
- [ ] Regular security updates
- [ ] Performance monitoring
- [ ] Backup verification
- [ ] User feedback analysis
- [ ] Ad performance optimization

## 📞 Support Resources

### Cloudways Support
- **Documentation**: [cloudways.com/docs](https://cloudways.com/docs)
- **Support Ticket**: Available in Cloudways dashboard
- **Community Forum**: [community.cloudways.com](https://community.cloudways.com)

### Application Support
- **Email**: roblox@gmail.com
- **Documentation**: Main README.md
- **GitHub Issues**: For code-related problems

### Performance Tools
- **Google PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
- **GTmetrix**: [gtmetrix.com](https://gtmetrix.com)
- **WebPageTest**: [webpagetest.org](https://webpagetest.org)

---

## 🎯 Quick Deployment Checklist

### Initial Setup
- [ ] Create Cloudways account
- [ ] Set up DigitalOcean server
- [ ] Configure application settings
- [ ] Connect Git repository
- [ ] Deploy application

### Domain & SSL
- [ ] Add domain to Cloudways
- [ ] Update DNS nameservers
- [ ] Install SSL certificate
- [ ] Enable HTTPS redirect

### Optimization
- [ ] Enable CDN
- [ ] Configure caching
- [ ] Optimize images
- [ ] Test performance

### Monitoring
- [ ] Set up monitoring alerts
- [ ] Configure backups
- [ ] Test SSL certificate
- [ ] Monitor ad performance

---

**Robox** - Successfully Deployed on Cloudways! 🚀 