import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '张三',
    email: 'zhangsan@example.com',
    phone: '138-0000-0000',
    location: '北京市海淀区',
    bio: '热爱创新，专注于产品设计和用户体验。致力于通过科技改变生活，让世界变得更美好。',
    company: '创新科技有限公司',
    position: '产品经理',
    joinDate: '2024-01-15',
    skills: ['产品设计', '用户体验', '创新思维', '项目管理', '数据分析'],
    achievements: [
      { label: '完成测评', value: '12' },
      { label: '创新项目', value: '8' },
      { label: '获得徽章', value: '15' },
      { label: '积分', value: '2,580' },
    ],
  });

  const handleSave = () => {
    setIsEditing(false);
    // 这里可以添加保存逻辑
  };

  return (
    <div className="profile-container">
      {/* 导航栏 */}
      <nav className="nav">
        <div className="nav-content">
          <Link to="/" className="nav-back">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>返回首页</span>
          </Link>
          <h1 className="nav-title">个人信息</h1>
          <button 
            className="nav-action"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? '取消' : '编辑'}
          </button>
        </div>
      </nav>

      {/* 主内容 */}
      <main className="main">
        <div className="main-content">
          {/* 个人信息卡片 */}
          <section className="profile-header">
            <div className="avatar-section">
              <div className="avatar">
                <div className="avatar-placeholder">
                  {userInfo.name.charAt(0)}
                </div>
                {isEditing && (
                  <button className="avatar-edit">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M11.5 2.5L13.5 4.5L5 13H3V11L11.5 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}
              </div>
              <div className="user-basic">
                {isEditing ? (
                  <input
                    type="text"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                    className="name-input"
                  />
                ) : (
                  <h2 className="user-name">{userInfo.name}</h2>
                )}
                <p className="user-title">{userInfo.position} · {userInfo.company}</p>
              </div>
            </div>
          </section>

          {/* 统计数据 */}
          <section className="stats-section">
            <div className="stats-grid">
              {userInfo.achievements.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 详细信息 */}
          <section className="info-section">
            <div className="info-card">
              <h3 className="info-title">基本信息</h3>
              
              <div className="info-grid">
                <div className="info-item">
                  <div className="info-label">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 3h12v10H2V3z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M2 6h12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <span>邮箱</span>
                  </div>
                  {isEditing ? (
                    <input
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                      className="info-input"
                    />
                  ) : (
                    <div className="info-value">{userInfo.email}</div>
                  )}
                </div>

                <div className="info-item">
                  <div className="info-label">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 2h10v12l-5-3-5 3V2z" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <span>电话</span>
                  </div>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                      className="info-input"
                    />
                  ) : (
                    <div className="info-value">{userInfo.phone}</div>
                  )}
                </div>

                <div className="info-item">
                  <div className="info-label">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 8a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <span>地址</span>
                  </div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userInfo.location}
                      onChange={(e) => setUserInfo({...userInfo, location: e.target.value})}
                      className="info-input"
                    />
                  ) : (
                    <div className="info-value">{userInfo.location}</div>
                  )}
                </div>

                <div className="info-item">
                  <div className="info-label">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M2 6h12M6 2v12" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <span>加入时间</span>
                  </div>
                  <div className="info-value">{userInfo.joinDate}</div>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3 className="info-title">个人简介</h3>
              {isEditing ? (
                <textarea
                  value={userInfo.bio}
                  onChange={(e) => setUserInfo({...userInfo, bio: e.target.value})}
                  className="bio-textarea"
                  rows={4}
                />
              ) : (
                <p className="bio-text">{userInfo.bio}</p>
              )}
            </div>

            <div className="info-card">
              <h3 className="info-title">技能标签</h3>
              <div className="skills-container">
                {userInfo.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                    {isEditing && (
                      <button className="skill-remove">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </button>
                    )}
                  </span>
                ))}
                {isEditing && (
                  <button className="skill-add">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    添加技能
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* 保存按钮 */}
          {isEditing && (
            <div className="action-section">
              <button className="btn-save" onClick={handleSave}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13 3L6 10L3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                保存修改
              </button>
            </div>
          )}
        </div>
      </main>

      {/* 页脚 */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">© 2024 IAC Incubator. 保留所有权利。</p>
        </div>
      </footer>

      <style>{`
        .profile-container {
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

        .nav-action {
          font-size: 14px;
          color: var(--accent-blue);
          background: none;
          border: none;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .nav-action:hover {
          background: rgba(0, 113, 227, 0.1);
        }

        /* 主内容 */
        .main {
          flex: 1;
          padding: var(--spacing-3xl) var(--spacing-xl);
          background: var(--gradient-hero);
        }

        .main-content {
          max-width: 980px;
          margin: 0 auto;
        }

        /* 个人信息头部 */
        .profile-header {
          margin-bottom: var(--spacing-2xl);
        }

        .avatar-section {
          display: flex;
          align-items: center;
          gap: var(--spacing-xl);
        }

        .avatar {
          position: relative;
          width: 120px;
          height: 120px;
        }

        .avatar-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          font-weight: 600;
          color: white;
        }

        .avatar-edit {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 2px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .avatar-edit:hover {
          background: var(--accent-blue);
          color: white;
          border-color: var(--accent-blue);
        }

        .user-basic {
          flex: 1;
        }

        .user-name {
          font-size: 32px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
        }

        .name-input {
          font-size: 32px;
          font-weight: 600;
          color: var(--text-primary);
          background: transparent;
          border: none;
          border-bottom: 2px solid var(--accent-blue);
          padding: 0;
          width: 100%;
        }

        .name-input:focus {
          outline: none;
        }

        .user-title {
          font-size: 17px;
          color: var(--text-secondary);
        }

        /* 统计数据 */
        .stats-section {
          margin-bottom: var(--spacing-2xl);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: var(--spacing-md);
        }

        .stat-card {
          background: var(--bg-primary);
          padding: var(--spacing-xl);
          border-radius: 8px;
          text-align: center;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-light);
          transition: all var(--transition-base);
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .stat-value {
          font-size: 32px;
          font-weight: 600;
          color: var(--accent-blue);
          margin-bottom: var(--spacing-xs);
        }

        .stat-label {
          font-size: 15px;
          color: var(--text-secondary);
        }

        /* 详细信息 */
        .info-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }

        .info-card {
          background: var(--bg-primary);
          padding: var(--spacing-2xl);
          border-radius: 8px;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-light);
        }

        .info-title {
          font-size: 21px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xl);
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-xl);
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .info-label {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          font-size: 13px;
          color: var(--text-secondary);
        }

        .info-value {
          font-size: 17px;
          color: var(--text-primary);
        }

        .info-input {
          font-size: 17px;
          color: var(--text-primary);
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 8px 12px;
          transition: all var(--transition-fast);
        }

        .info-input:focus {
          outline: none;
          border-color: var(--accent-blue);
          box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.1);
        }

        .bio-text {
          font-size: 17px;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .bio-textarea {
          width: 100%;
          padding: 12px 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 17px;
          line-height: 1.6;
          color: var(--text-primary);
          font-family: var(--font-sans);
          resize: vertical;
          transition: all var(--transition-fast);
        }

        .bio-textarea:focus {
          outline: none;
          border-color: var(--accent-blue);
          box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.1);
        }

        /* 技能标签 */
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
        }

        .skill-tag {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-xs);
          padding: 8px 16px;
          background: var(--bg-secondary);
          border-radius: 8px;
          font-size: 15px;
          color: var(--text-primary);
          transition: all var(--transition-fast);
        }

        .skill-tag:hover {
          background: var(--accent-blue);
          color: white;
        }

        .skill-remove {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          color: inherit;
          display: flex;
          align-items: center;
        }

        .skill-add {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-xs);
          padding: 8px 16px;
          background: transparent;
          border: 1px dashed var(--border);
          border-radius: 8px;
          font-size: 15px;
          color: var(--accent-blue);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .skill-add:hover {
          background: rgba(0, 113, 227, 0.05);
          border-color: var(--accent-blue);
        }

        /* 保存按钮 */
        .action-section {
          margin-top: var(--spacing-2xl);
          display: flex;
          justify-content: center;
        }

        .btn-save {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: 12px 32px;
          background: var(--accent-blue);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 17px;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .btn-save:hover {
          background: var(--accent-blue-hover);
          transform: scale(1.02);
        }

        /* 页脚 */
        .footer {
          padding: var(--spacing-xl);
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
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
          .main {
            padding: var(--spacing-2xl) var(--spacing-lg);
          }

          .user-name, .name-input {
            font-size: 28px;
          }
        }

        @media (max-width: 768px) {
          .nav-content {
            padding: 0 var(--spacing-md);
          }

          .main {
            padding: var(--spacing-xl) var(--spacing-md);
          }

          .avatar-section {
            flex-direction: column;
            text-align: center;
          }

          .avatar {
            width: 100px;
            height: 100px;
          }

          .avatar-placeholder {
            font-size: 40px;
          }

          .user-name, .name-input {
            font-size: 24px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .info-card {
            padding: var(--spacing-lg);
          }
        }

        /* 暗色主题适配 */
        @media (prefers-color-scheme: dark) {
          .nav {
            background: rgba(29, 29, 31, 0.8);
          }

          .stat-card,
          .info-card {
            background: var(--bg-secondary);
            border-color: var(--border);
          }

          .info-input,
          .bio-textarea {
            background: var(--bg-primary);
            border-color: var(--border);
          }

          .skill-tag {
            background: var(--bg-primary);
          }

          .skill-tag:hover {
            background: var(--accent-blue);
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;
