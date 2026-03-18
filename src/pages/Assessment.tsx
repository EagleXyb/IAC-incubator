import React from 'react';
import { Link } from 'react-router-dom';

const Assessment: React.FC = () => {
  return (
    <div className="assessment-container">
      {/* 导航栏 */}
      <nav className="nav">
        <div className="nav-content">
          <Link to="/" className="nav-back">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>返回首页</span>
          </Link>
          <h1 className="nav-title">创新能力测评</h1>
          <div style={{ width: '80px' }}></div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">专业评估</div>
          <h2 className="hero-title">发现您的创新潜能</h2>
          <p className="hero-description">
            通过科学的测评体系，全面了解您的创新能力维度，获得个性化的发展建议
          </p>
        </div>
      </section>

      {/* 测评流程 */}
      <section className="process">
        <div className="process-content">
          <h3 className="process-title">测评流程</h3>
          
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4 className="step-title">基础评估</h4>
                <p className="step-description">
                  评估您的创新思维基础能力，了解您的创新意识、好奇心和开放性思维
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4 className="step-title">能力测试</h4>
                <p className="step-description">
                  通过一系列精心设计的测试题，评估您的发散性思维、问题解决和创造性表达能力
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4 className="step-title">结果分析</h4>
                <p className="step-description">
                  生成详细的创新能力评估报告，提供针对性的提升建议和发展路径
                </p>
              </div>
            </div>
          </div>

          <div className="process-cta">
            <button className="btn-primary">
              开始测评
            </button>
            <button className="btn-secondary">
              了解更多
            </button>
          </div>
        </div>
      </section>

      {/* 特性展示 */}
      <section className="features">
        <div className="features-content">
          <div className="feature-item">
            <div className="feature-icon">⏱️</div>
            <div className="feature-text">
              <h4>快速便捷</h4>
              <p>约 15 分钟完成全部测评</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <div className="feature-text">
              <h4>科学准确</h4>
              <p>基于专业心理学模型</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <div className="feature-text">
              <h4>个性定制</h4>
              <p>针对性的发展建议</p>
            </div>
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
        .assessment-container {
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

        .nav-back {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--accent-blue);
          text-decoration: none;
          font-size: 14px;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-sm);
          transition: background var(--transition-fast);
        }

        .nav-back:hover {
          background: rgba(0, 113, 227, 0.1);
          text-decoration: none;
        }

        .nav-title {
          font-size: 17px;
          font-weight: 600;
          color: var(--text-primary);
        }

        /* Hero 区域 */
        .hero {
          padding: 80px var(--spacing-xl) 60px;
          background: var(--gradient-hero);
          text-align: center;
          position: relative;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 0%, rgba(255, 107, 107, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-content {
          max-width: 680px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(255, 107, 107, 0.1);
          color: #ff6b6b;
          border-radius: var(--radius-full);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: var(--spacing-md);
        }

        .hero-title {
          font-size: 48px;
          font-weight: 600;
          letter-spacing: -0.003em;
          line-height: 1.08349;
          color: var(--text-primary);
          margin-bottom: var(--spacing-md);
        }

        .hero-description {
          font-size: 19px;
          line-height: 1.4211;
          color: var(--text-secondary);
        }

        /* 测评流程 */
        .process {
          padding: var(--spacing-4xl) var(--spacing-xl);
          background: var(--bg-primary);
        }

        .process-content {
          max-width: 980px;
          margin: 0 auto;
        }

        .process-title {
          font-size: 40px;
          font-weight: 600;
          letter-spacing: -0.002em;
          line-height: 1.1;
          color: var(--text-primary);
          text-align: center;
          margin-bottom: var(--spacing-3xl);
        }

        .steps {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2xl);
          margin-bottom: var(--spacing-3xl);
        }

        .step {
          display: flex;
          gap: var(--spacing-xl);
          align-items: flex-start;
          padding: var(--spacing-2xl);
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          transition: all var(--transition-base);
        }

        .step:hover {
          transform: translateX(8px);
          box-shadow: var(--shadow-md);
        }

        .step-number {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
          color: white;
          font-size: 24px;
          font-weight: 600;
          border-radius: var(--radius-md);
        }

        .step-content {
          flex: 1;
        }

        .step-title {
          font-size: 21px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-sm);
        }

        .step-description {
          font-size: 15px;
          line-height: 1.46668;
          color: var(--text-secondary);
        }

        .process-cta {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
        }

        .btn-primary {
          padding: 12px 32px;
          background: var(--accent-blue);
          color: white;
          border: none;
          border-radius: var(--radius-full);
          font-size: 17px;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .btn-primary:hover {
          background: var(--accent-blue-hover);
          transform: scale(1.02);
        }

        .btn-secondary {
          padding: 12px 32px;
          background: transparent;
          color: var(--accent-blue);
          border: 1px solid var(--accent-blue);
          border-radius: var(--radius-full);
          font-size: 17px;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .btn-secondary:hover {
          background: rgba(0, 113, 227, 0.05);
        }

        /* 特性展示 */
        .features {
          padding: var(--spacing-3xl) var(--spacing-xl);
          background: var(--bg-secondary);
        }

        .features-content {
          max-width: 980px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-xl);
        }

        .feature-item {
          text-align: center;
          padding: var(--spacing-xl);
        }

        .feature-icon {
          font-size: 40px;
          margin-bottom: var(--spacing-md);
        }

        .feature-text h4 {
          font-size: 17px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
        }

        .feature-text p {
          font-size: 15px;
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
            padding: 60px var(--spacing-lg) 40px;
          }

          .hero-title {
            font-size: 40px;
          }

          .process {
            padding: var(--spacing-3xl) var(--spacing-lg);
          }

          .process-title {
            font-size: 32px;
          }

          .features {
            padding: var(--spacing-2xl) var(--spacing-lg);
          }
        }

        @media (max-width: 768px) {
          .nav-content {
            padding: 0 var(--spacing-md);
          }

          .hero {
            padding: 40px var(--spacing-md) 30px;
          }

          .hero-title {
            font-size: 32px;
          }

          .hero-description {
            font-size: 17px;
          }

          .step {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: var(--spacing-xl);
          }

          .step:hover {
            transform: translateY(-4px);
          }

          .process-cta {
            flex-direction: column;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
          }

          .process,
          .features {
            padding: var(--spacing-2xl) var(--spacing-md);
          }

          .process-title {
            font-size: 28px;
          }
        }

        /* 暗色主题适配 */
        @media (prefers-color-scheme: dark) {
          .nav {
            background: rgba(29, 29, 31, 0.8);
          }

          .step {
            background: var(--bg-secondary);
          }

          .hero-badge {
            background: rgba(255, 107, 107, 0.15);
          }
        }
      `}</style>
    </div>
  );
};

export default Assessment;
