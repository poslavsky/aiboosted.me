import React, { useState } from 'react';

const ProductGuide = () => {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);

  const levels = [
    {
      id: 1,
      name: 'TalkMate',
      status: 'Бесплатно',
      statusType: 'free',
      whatItIs: 'Бот для разговорной практики в ChatGPT. Открываешь, выбираешь язык и тему — говоришь как с нейтивом.',
      howItWorks: [
        'Открываешь и выбираешь тему',
        'Записываешь голосовые или переходишь в Voice Mode',
        'Получаешь фидбек по ошибкам'
      ],
      bestFor: 'Для всех. Бесплатно, без регистрации, работает сразу. Хоть 10 минут, хоть час.',
      limitation: 'Каждый разговор — с чистого листа. Не запоминает контекст между сессиями.',
      timeToStart: '2 мин',
      cost: '0 €',
      hasVideo: true,
      videoLabel: 'Смотреть видео',
      videoUrl: 'https://youtu.be/MZiIHwPrPLo',
      ctaUrl: 'https://chatgpt.com/g/g-oVi6tywSm-talkmate-interactive-language-learning',
      socialProof: {
        rating: '4.7',
        conversations: '1000+'
      },
      isAvailable: true
    },
    {
      id: 2,
      name: 'AI Buddy',
      status: 'РЕКОМЕНДУЕМ',
      statusType: 'popular',
      whatItIs: 'Твой персональный AI-native. Помнит контекст, знает твои цели, адаптируется под тебя.',
      howItWorks: [
        'Настраиваем твоего AI-Buddy для разговорной практики и фидбека',
        'AI-Buddy знает тебя и помнит контекст ваших диалогов',
        'Общаешься на темы, которые тебе интересны, важны и актуальны',
        'Переключаешь персонажей: 110% прямой Джарвис, Лингвапанк, Философ,...'
      ],
      bestFor: 'Хочешь практиковаться каждый день. Обсуждать то, что тебя реально волнует — на целевом языке.',
      limitation: '30 минут на первоначальную настройку.',
      timeToStart: '30 мин',
      cost: '45 €',
      costNote: 'настройка один раз',
      ctaUrl: 'https://aiboosted.me/',
      isAvailable: true
    },
    {
      id: 3,
      name: 'AI Tutor',
      status: 'Скоро',
      statusType: 'soon',
      whatItIs: 'Система подготовки к любым языковым целям — job interview, конференция, поездка. AI-коуч + AI-тьютор.',
      howItWorks: [
        'AI-коуч помогает сформулировать цель через вопросы',
        'Выделяет сценарии: рассказ о себе, питч проекта, переговоры, small talk',
        'AI-тьютор тренирует через практику и симуляции',
        'Автоматически собирает ошибки и помогает их проработать'
      ],
      bestFor: 'Хочешь готовиться системно, сфокусированно и видеть быстрый прогресс.',
      limitation: 'В разработке.',
      timeToStart: '—',
      cost: 'TBD',
      ctaUrl: 'https://t.me/pslvsk',
      isAvailable: false
    },
    {
      id: 4,
      name: 'Спринт',
      status: 'Набор открыт',
      statusType: 'hot',
      whatItIs: '2-недельный спринт в мини-группе. Ежедневная практика + accountability + групповая поддержка.',
      howItWorks: [
        'Берёшь обязательство — сколько минут в день готов практиковаться',
        'Практикуешься с TalkMate, AI Buddy или AI Tutor — на твой выбор',
        'Отчитываешься в группу — accountability работает',
        'Делишься прогрессом и сложностями, видишь как двигаются другие'
      ],
      bestFor: 'Хочешь сформировать привычку. Нужна внешняя структура, люди и общий ритм.',
      limitation: 'Готовность выделять время каждый день — пусть немного, но регулярно.',
      timeToStart: 'Flexible',
      cost: '15 €',
      costNote: 'за спринт',
      ctaUrl: 'https://t.me/pslvsk',
      isAvailable: true
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: "'Space Grotesk', -apple-system, sans-serif",
      padding: '48px 24px',
      color: '#000000'
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '40px'
        }}>
          {/* Lightning icon in black box */}
          <div style={{
            width: '36px',
            height: '36px',
            background: '#000000',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L4 14H11L10 22L20 10H13L13 2Z" fill="#ff2e00" />
            </svg>
          </div>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '18px',
            fontWeight: '700',
            fontStyle: 'italic',
            letterSpacing: '-0.5px',
            color: '#000'
          }}>
            AIBOOSTED.ME
          </span>
        </div>

        {/* Header */}
        <header style={{ marginBottom: '48px' }}>
          <div style={{
            display: 'inline-block',
            background: '#ff2e00',
            padding: '12px 24px',
            marginBottom: '24px',
            border: '3px solid #000000',
            boxShadow: '4px 4px 0px 0px #000000',
            transform: 'rotate(-1deg)'
          }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '15px',
              fontWeight: '600',
              color: '#ffffff',
              letterSpacing: '0.5px'
            }}>
              Нужен только ChatGPT
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 8vw, 56px)',
            fontWeight: '700',
            margin: '0 0 24px',
            lineHeight: '1.05',
            letterSpacing: '-1px',
            textTransform: 'uppercase'
          }}>
            Как практиковать<br />
            <span style={{ color: '#ff2e00' }}>язык с AI</span>
          </h1>

          <div style={{
            borderLeft: '3px solid #000',
            paddingLeft: '20px',
            marginLeft: '4px'
          }}>
            <p style={{
              fontSize: '18px',
              color: '#525252',
              margin: 0,
              lineHeight: '1.6',
              maxWidth: '480px'
            }}>
              Четыре способа использовать ChatGPT для разговорной практики.
              От бесплатного старта до системной подготовки.
            </p>
          </div>
        </header>

        {/* Comparison Card */}
        <section style={{
          background: '#ffffff',
          border: '2px solid #000000',
          borderRadius: '12px',
          boxShadow: '4px 4px 0px 0px #000000',
          padding: '32px',
          marginBottom: '48px'
        }}>
          <h2 style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            fontWeight: '500',
            margin: '0 0 24px',
            color: '#525252',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            01. Сравнение с репетитором
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {/* Tutor */}
            <div style={{
              padding: '24px',
              border: '2px solid #e5e5e5',
              borderRadius: '12px'
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                color: '#525252',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Репетитор
              </div>
              <div style={{
                fontSize: '14px',
                color: '#525252',
                marginBottom: '8px'
              }}>
                2 раза в неделю по часу
              </div>
              <div style={{
                fontSize: '36px',
                fontWeight: '700',
                marginBottom: '4px'
              }}>
                8 ч
              </div>
              <div style={{
                fontSize: '13px',
                color: '#525252'
              }}>
                практики в месяц
              </div>
              <div style={{
                marginTop: '20px',
                paddingTop: '20px',
                borderTop: '1px solid #e5e5e5'
              }}>
                <span style={{ fontSize: '20px', fontWeight: '700' }}>~200 €/мес</span>
                <div style={{
                  fontSize: '12px',
                  color: '#525252',
                  marginTop: '4px'
                }}>
                  при ставке 25 €/час
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#ff2e00',
                  fontWeight: '600',
                  marginTop: '8px'
                }}>
                  ≈ 2 000 € в год
                </div>
              </div>
            </div>

            {/* AI */}
            <div style={{
              padding: '24px',
              background: '#ffffff',
              border: '2px solid #000000',
              borderRadius: '12px',
              boxShadow: '4px 4px 0px 0px #000000',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-12px',
                right: '16px',
                background: '#000',
                color: '#fff',
                padding: '4px 12px',
                borderRadius: '100px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                fontWeight: '500'
              }}>
                x2–x4 практики
              </div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                color: '#525252',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                AI-практика
              </div>
              <div style={{
                fontSize: '14px',
                color: '#525252',
                marginBottom: '8px'
              }}>
                Каждый день по 30–60 мин
              </div>
              <div style={{
                fontSize: '36px',
                fontWeight: '700',
                marginBottom: '4px'
              }}>
                15–30 ч
              </div>
              <div style={{
                fontSize: '13px',
                color: '#525252'
              }}>
                практики в месяц
              </div>
              <div style={{
                marginTop: '20px',
                paddingTop: '20px',
                borderTop: '1px solid #e5e5e5'
              }}>
                <span style={{ fontSize: '20px', fontWeight: '700' }}>45 €</span>
                <div style={{
                  fontSize: '12px',
                  color: '#525252',
                  marginTop: '4px'
                }}>
                  разовый платёж
                </div>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '24px',
            padding: '20px',
            background: '#f5f5f5',
            borderRadius: '10px'
          }}>
            <p style={{
              fontSize: '15px',
              color: '#1a1a1a',
              margin: 0,
              lineHeight: '1.7'
            }}>
              AI даёт объём практики, который с человеком просто не потянуть.
              Без расписания, без стресса, в любой момент. А чтобы не сливаться — группа.
            </p>
          </div>
        </section>

        {/* Video Demo Section */}
        <section style={{
          background: '#ffffff',
          border: '2px solid #000000',
          borderRadius: '12px',
          boxShadow: '4px 4px 0px 0px #000000',
          padding: '32px',
          marginBottom: '48px'
        }}>
          <h2 style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            fontWeight: '500',
            margin: '0 0 24px',
            color: '#525252',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            02. Как это выглядит
          </h2>

          {/* Video embed placeholder */}
          <a
            href="https://youtube.com/shorts/kHK2RVCYrtA?feature=share"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              position: 'relative',
              background: '#000',
              borderRadius: '12px',
              overflow: 'hidden',
              aspectRatio: '16/9',
              textDecoration: 'none',
              border: '2px solid #000'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#ff2e00',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(255, 46, 0, 0.4)'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7L8 5z" fill="#ffffff" />
                </svg>
              </div>
              <span style={{
                color: '#ffffff',
                fontSize: '14px',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: '500'
              }}>
                1.5 мин — как я использую AI для практики
              </span>
            </div>
          </a>

          <p style={{
            fontSize: '15px',
            color: '#525252',
            margin: '20px 0 0',
            lineHeight: '1.6'
          }}>
            100+ часов практики английского с разными LLM. Ещё больше на эксперименты с фичами, промптами, голосовыми режимами. Оставил только то, что работает.
          </p>
        </section>

        {/* Products */}
        <section>
          <h2 style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            fontWeight: '500',
            margin: '0 0 24px',
            color: '#525252',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            03. Варианты
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {levels.map((level) => (
              <article
                key={level.id}
                onClick={() => setExpandedLevel(expandedLevel === level.id ? null : level.id)}
                style={{
                  background: '#ffffff',
                  border: '2px solid #000000',
                  borderRadius: '12px',
                  boxShadow: expandedLevel === level.id
                    ? '6px 6px 0px 0px #000000'
                    : '4px 4px 0px 0px #000000',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.15s ease, transform 0.15s ease',
                  transform: expandedLevel === level.id ? 'translate(-2px, -2px)' : 'none',
                  opacity: level.isAvailable ? 1 : 0.6
                }}
              >
                {/* Header */}
                <div style={{
                  padding: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '12px',
                      flexWrap: 'wrap'
                    }}>
                      <h3 style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        margin: 0,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.5px'
                      }}>
                        {level.name}
                      </h3>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '11px',
                        fontWeight: '500',
                        padding: '6px 12px',
                        borderRadius: '100px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        background: level.statusType === 'free' ? '#10b981' :
                          level.statusType === 'hot' ? '#ff2e00' :
                            level.statusType === 'popular' ? '#3B82F6' :
                              level.statusType === 'soon' ? '#e5e5e5' : '#000',
                        color: level.statusType === 'soon' ? '#525252' : '#fff'
                      }}>
                        {level.status}
                      </span>
                    </div>
                    <p style={{
                      fontSize: '16px',
                      color: '#525252',
                      margin: 0,
                      lineHeight: '1.5'
                    }}>
                      {level.whatItIs}
                    </p>
                  </div>
                  <div style={{
                    fontSize: '24px',
                    color: '#000',
                    transform: expandedLevel === level.id ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.2s ease',
                    fontWeight: '300'
                  }}>
                    +
                  </div>
                </div>

                {/* Expanded */}
                {expandedLevel === level.id && (
                  <div style={{
                    padding: '0 24px 24px',
                    borderTop: '1px solid #e5e5e5'
                  }}>
                    {/* Social proof for TalkMate */}
                    {level.socialProof && (
                      <div style={{
                        display: 'flex',
                        gap: '12px',
                        marginTop: '20px',
                        paddingBottom: '20px',
                        borderBottom: '1px solid #e5e5e5'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '8px 14px',
                          background: '#f5f5f5',
                          borderRadius: '8px'
                        }}>
                          <span style={{ fontSize: '14px' }}>⭐</span>
                          <span style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '14px',
                            fontWeight: '600'
                          }}>
                            {level.socialProof.rating}
                          </span>
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '8px 14px',
                          background: '#f5f5f5',
                          borderRadius: '8px'
                        }}>
                          <span style={{ fontSize: '14px' }}>💬</span>
                          <span style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '14px',
                            fontWeight: '600'
                          }}>
                            {level.socialProof.conversations} диалогов
                          </span>
                        </div>
                      </div>
                    )}

                    {/* How it works */}
                    {level.howItWorks && (
                      <div style={{ marginTop: '24px' }}>
                        <h4 style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '11px',
                          fontWeight: '500',
                          color: '#525252',
                          margin: '0 0 16px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          Как работает
                        </h4>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px'
                        }}>
                          {level.howItWorks.map((step, i) => (
                            <div key={i} style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '12px'
                            }}>
                              <span style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: '12px',
                                fontWeight: '600',
                                color: '#ff2e00',
                                flexShrink: 0
                              }}>
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span style={{
                                fontSize: '15px',
                                color: '#000',
                                lineHeight: '1.4'
                              }}>
                                {step}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Best for */}
                    <div style={{ marginTop: '24px' }}>
                      <h4 style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '11px',
                        fontWeight: '500',
                        color: '#525252',
                        margin: '0 0 8px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        Подойдёт, если
                      </h4>
                      <p style={{
                        fontSize: '15px',
                        color: '#000',
                        margin: 0,
                        lineHeight: '1.6'
                      }}>
                        {level.bestFor}
                      </p>
                    </div>

                    {/* Limitation */}
                    <div style={{
                      marginTop: '24px',
                      padding: '16px',
                      background: '#f5f5f5',
                      borderRadius: '8px'
                    }}>
                      <h4 style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '11px',
                        fontWeight: '500',
                        color: '#525252',
                        margin: '0 0 8px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        Ограничения
                      </h4>
                      <p style={{
                        fontSize: '14px',
                        color: '#525252',
                        margin: 0,
                        lineHeight: '1.5'
                      }}>
                        {level.limitation}
                      </p>
                    </div>

                    {/* Note for AI Buddy */}
                    {level.id === 2 && (
                      <p style={{
                        fontSize: '13px',
                        color: '#525252',
                        margin: '12px 0 0',
                        lineHeight: '1.5'
                      }}>
                        В комплекте: подробный гайд + индивидуальный созвон для настройки
                      </p>
                    )}

                    {/* Meta row */}
                    <div style={{
                      display: 'flex',
                      gap: '32px',
                      marginTop: '24px',
                      paddingTop: '24px',
                      borderTop: '1px solid #e5e5e5'
                    }}>
                      <div>
                        <div style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '10px',
                          color: '#525252',
                          marginBottom: '4px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          Старт
                        </div>
                        <div style={{ fontSize: '16px', fontWeight: '600' }}>
                          {level.timeToStart}
                        </div>
                      </div>
                      <div>
                        <div style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '10px',
                          color: '#525252',
                          marginBottom: '4px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          Стоимость
                        </div>
                        <div style={{ fontSize: '16px', fontWeight: '600' }}>
                          {level.cost}
                        </div>
                        {level.costNote && (
                          <div style={{
                            fontSize: '12px',
                            color: '#525252',
                            marginTop: '2px'
                          }}>
                            {level.costNote}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    {level.isAvailable && (
                      <div style={{ marginTop: '24px' }}>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                          {/* Video button first for TalkMate - more prominent */}
                          {level.hasVideo && level.videoUrl && (
                            <a
                              href={level.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                padding: '16px 24px',
                                background: '#ff2e00',
                                border: '2px solid #000',
                                borderRadius: '12px',
                                color: '#ffffff',
                                fontSize: '14px',
                                fontWeight: '600',
                                fontFamily: "'JetBrains Mono', monospace",
                                letterSpacing: '0.3px',
                                cursor: 'pointer',
                                boxShadow: '3px 3px 0px 0px #000000',
                                transition: 'all 0.1s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                textDecoration: 'none'
                              }}
                            >
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M8 5v14l11-7L8 5z" fill="#ffffff" />
                              </svg>
                              {level.videoLabel}
                            </a>
                          )}
                          <a
                            href={level.ctaUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              padding: '16px 28px',
                              background: level.hasVideo ? '#ffffff' : (level.statusType === 'hot' ? '#ff2e00' : '#000000'),
                              border: '2px solid #000',
                              borderRadius: '12px',
                              color: level.hasVideo ? '#000000' : '#ffffff',
                              fontSize: '14px',
                              fontWeight: '600',
                              fontFamily: "'JetBrains Mono', monospace",
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px',
                              cursor: 'pointer',
                              boxShadow: '3px 3px 0px 0px #000000',
                              transition: 'all 0.1s ease',
                              textDecoration: 'none'
                            }}
                          >
                            {level.id === 1 ? 'Открыть TalkMate →' :
                              level.id === 2 ? 'Настроить AI Buddy →' :
                                level.id === 4 ? 'Вписаться →' :
                                  'Инструкция →'}
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Waitlist button for AI Tutor */}
                    {level.id === 3 && !level.isAvailable && (
                      <div style={{ marginTop: '24px' }}>
                        <a
                          href={level.ctaUrl || 'https://t.me/pslvsk'}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            display: 'inline-block',
                            padding: '16px 28px',
                            background: '#fde047',
                            border: '2px solid #000',
                            borderRadius: '12px',
                            color: '#000000',
                            fontSize: '14px',
                            fontWeight: '600',
                            fontFamily: "'JetBrains Mono', monospace",
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            cursor: 'pointer',
                            boxShadow: '3px 3px 0px 0px #000000',
                            transition: 'all 0.1s ease',
                            textDecoration: 'none'
                          }}
                        >
                          Waitlist со скидкой 50% →
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <footer style={{
          marginTop: '48px',
          padding: '32px',
          background: '#fde047',
          border: '2px solid #000000',
          borderRadius: '12px',
          boxShadow: '4px 4px 0px 0px #000000'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '700',
            margin: '0 0 12px',
            textTransform: 'uppercase'
          }}>
            С чего начать
          </h3>
          <p style={{
            fontSize: '16px',
            color: '#000',
            margin: '0 0 24px',
            lineHeight: '1.6',
            opacity: 0.8
          }}>
            Никогда не пробовали — начните с TalkMate. Бесплатно, 2 минуты.
            Поговорите 10-15 минут, почувствуйте, как работает.
            Потом решите, нужно ли что-то ещё.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="https://youtu.be/MZiIHwPrPLo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '16px 24px',
                background: '#ff2e00',
                border: '2px solid #000',
                borderRadius: '12px',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: '600',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.3px',
                cursor: 'pointer',
                boxShadow: '3px 3px 0px 0px #000000',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7L8 5z" fill="#ffffff" />
              </svg>
              Смотреть видео
            </a>
            <a
              href="https://chatgpt.com/g/g-oVi6tywSm-talkmate-interactive-language-learning"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '16px 28px',
                background: '#000000',
                border: '2px solid #000',
                borderRadius: '12px',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: '600',
                fontFamily: "'JetBrains Mono', monospace",
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                cursor: 'pointer',
                boxShadow: '3px 3px 0px 0px rgba(0,0,0,0.3)',
                textDecoration: 'none'
              }}
            >
              Открыть TalkMate →
            </a>
          </div>
        </footer>

        {/* Brand footer */}
        <div style={{
          marginTop: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 20px',
            border: '2px dashed #d4d4d4',
            borderRadius: '12px'
          }}>
            <div style={{
              width: '28px',
              height: '28px',
              background: '#000000',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L4 14H11L10 22L20 10H13L13 2Z" fill="#ff2e00" />
              </svg>
            </div>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '14px',
              fontWeight: '700',
              fontStyle: 'italic',
              letterSpacing: '-0.3px',
              color: '#000'
            }}>
              AIBOOSTED.ME
            </span>
          </div>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
        }

        a:hover, button:hover {
          transform: translate(-2px, -2px);
          box-shadow: 5px 5px 0px 0px #000000 !important;
        }

        a:active, button:active {
          transform: translate(0, 0);
          box-shadow: 2px 2px 0px 0px #000000 !important;
        }
      `}</style>
    </div>
  );
};

export default ProductGuide;
