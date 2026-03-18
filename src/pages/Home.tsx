import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* 导航栏 */}
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="logo-icon">💡</span>
            <span className="logo-text">IAC Incubator</span>
          </div>
          <Link to="/admin" className="nav-link">后台管理</Link>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            创新创造孵化器
          </h1>
          <h2 className="hero-subtitle">
            激发创新潜能，孵化未来梦想
          </h2>
          <p className="hero-description">
            通过科学的测评体系、系统的训练方法和专业的孵化服务，助力您的创新之路
          </p>
          <div className="hero-cta">
            <Link to="/assessment" className="btn-primary">
              开始测评
            </Link>
          </div>
        </div>
      </section>

      {/* 功能区域 */}
      <section className="features">
        <div className="features-content">
          <div className="section-header">
            <h2 className="section-title">核心功能</h2>
            <p className="section-description">
              全方位的创新支持体系，为您的创意保驾护航
            </p>
          </div>

          <div className="feature-grid">
            <Link to="/assessment" className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)' }}>
                <span>📊</span>
              </div>
              <h3 className="feature-title">创新能力测评</h3>
              <p className="feature-description">
                基于专业评估体系，全面分析您的创新能力维度，提供个性化发展建议
              </p>
              <div className="feature-link">
                <span>了解更多</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </Link>

            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <span>🎯</span>
              </div>
              <h3 className="feature-title">创新能力训练</h3>
              <p className="feature-description">
                定制化训练课程，系统提升创新思维能力和实践技巧
              </p>
              <div className="feature-link">
                <span>了解更多</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
                <span>🚀</span>
              </div>
              <h3 className="feature-title">创新方案孵化</h3>
              <p className="feature-description">
                从创意到落地，提供全流程孵化服务和资源对接
              </p>
              <div className="feature-link">
                <span>了解更多</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特性展示 */}
      <section className="benefits">
        <div className="benefits-content">
          <div className="benefit-item">
            <div className="benefit-number">01</div>
            <h3 className="benefit-title">科学评估</h3>
            <p className="benefit-text">
              采用国际领先的评估模型，多维度精准分析创新能力
            </p>
          </div>
          <div className="benefit-item">
            <div className="benefit-number">02</div>
            <h3 className="benefit-title">个性定制</h3>
            <p className="benefit-text">
              根据评估结果，为您量身打造专属的成长路径
            </p>
          </div>
          <div className="benefit-item">
            <div className="benefit-number">03</div>
            <h3 className="benefit-title">全程陪伴</h3>
            <p className="benefit-text">
              专业导师团队全程指导，助您突破创新瓶颈
            </p>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">© 2024 IAC Incubator. 保留所有权利。</p>
        </div>
      </footer>

      <style>{`
        .home-container {
          min-height: 100vh;
          background: var(--bg-primary);
          display: flex;
          flex-direction: column;
        }

        /* 导航栏 */
        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 1px solid var(--border-light);
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--spacing-xl);
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .logo-icon {
          font-size: 24px;
        }

        .logo-text {
          font-size: 21px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .nav-link {
          font-size: 14px;
          color: var(--accent-blue);
          text-decoration: none;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-sm);
          transition: background var(--transition-fast);
        }

        .nav-link:hover {
          background: rgba(0, 113, 227, 0.1);
          text-decoration: none;
        }

        /* Hero 区域 */
        .hero {
          padding: 120px var(--spacing-xl) 100px;
          background: var(--gradient-hero);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 0%, rgba(0, 113, 227, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-content {
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: 64px;
          font-weight: 600;
          letter-spacing: -0.015em;
          line-height: 1.05;
          color: var(--text-primary);
          margin-bottom: var(--spacing-md);
        }

        .hero-subtitle {
          font-size: 32px;
          font-weight: 500;
          letter-spacing: 0.004em;
          line-height: 1.25;
          color: var(--text-primary);
          margin-bottom: var(--spacing-lg);
        }

        .hero-description {
          font-size: 21px;
          line-height: 1.381;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto var(--spacing-2xl);
        }

        .hero-cta {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          align-items: center;
        }

        .btn-primary {
          display: inline-block;
          background: var(--accent-blue);
          color: white;
          padding: 12px 24px;
          border-radius: var(--radius-full);
          font-size: 17px;
          font-weight: 500;
          text-decoration: none;
          transition: all var(--transition-base);
        }

        .btn-primary:hover {
          background: var(--accent-blue-hover);
          transform: scale(1.02);
          text-decoration: none;
        }

        /* 功能区域 */
        .features {
          padding: var(--spacing-4xl) var(--spacing-xl);
          background: var(--bg-primary);
        }

        .features-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-3xl);
        }

        .section-title {
          font-size: 48px;
          font-weight: 600;
          letter-spacing: -0.003em;
          line-height: 1.08349;
          color: var(--text-primary);
          margin-bottom: var(--spacing-md);
        }

        .section-description {
          font-size: 19px;
          line-height: 1.4211;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--spacing-xl);
        }

        .feature-card {
          background: var(--bg-secondary);
          padding: var(--spacing-2xl);
          border-radius: var(--radius-lg);
          transition: all var(--transition-base);
          cursor: pointer;
          text-decoration: none;
          border: 1px solid transparent;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--border-light);
          text-decoration: none;
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--spacing-lg);
          font-size: 28px;
        }

        .feature-title {
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 0;
          line-height: 1.16667;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
        }

        .feature-description {
          font-size: 15px;
          line-height: 1.46668;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
        }

        .feature-link {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--accent-blue);
          font-size: 17px;
          font-weight: 500;
          transition: gap var(--transition-fast);
        }

        .feature-card:hover .feature-link {
          gap: var(--spacing-sm);
        }

        /* 特性展示 */
        .benefits {
          padding: var(--spacing-4xl) var(--spacing-xl);
          background: var(--bg-secondary);
        }

        .benefits-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-2xl);
        }

        .benefit-item {
          text-align: center;
        }

        .benefit-number {
          font-size: 56px;
          font-weight: 600;
          color: var(--border);
          line-height: 1;
          margin-bottom: var(--spacing-md);
        }

        .benefit-title {
          font-size: 21px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
        }

        .benefit-text {
          font-size: 15px;
          line-height: 1.46668;
          color: var(--text-secondary);
        }

        /* 页脚 */
        .footer {
          padding: var(--spacing-xl);
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
          margin-top: auto;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-text {
          font-size: 12px;
          color: var(--text-secondary);
        }

        /* 响应式 */
        @media (max-width: 1024px) {
          .hero {
            padding: 80px var(--spacing-lg) 60px;
          }

          .hero-title {
            font-size: 48px;
          }

          .hero-subtitle {
            font-size: 24px;
          }

          .hero-description {
            font-size: 17px;
          }

          .section-title {
            font-size: 40px;
          }

          .features {
            padding: var(--spacing-3xl) var(--spacing-lg);
          }

          .benefits {
            padding: var(--spacing-3xl) var(--spacing-lg);
          }
        }

        @media (max-width: 768px) {
          .nav-content {
            padding: 0 var(--spacing-md);
          }

          .hero {
            padding: 60px var(--spacing-md) 40px;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-subtitle {
            font-size: 21px;
          }

          .hero-description {
            font-size: 15px;
          }

          .section-title {
            font-size: 32px;
          }

          .section-description {
            font-size: 17px;
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .benefits-content {
            grid-template-columns: 1fr;
          }

          .features,
          .benefits {
            padding: var(--spacing-2xl) var(--spacing-md);
          }
        }

        /* 暗色主题适配 */
        @media (prefers-color-scheme: dark) {
          .nav {
            background: rgba(29, 29, 31, 0.8);
          }

          .feature-card {
            background: var(--bg-secondary);
          }

          .benefit-number {
            color: var(--border);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
