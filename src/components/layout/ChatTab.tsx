import { useI18n } from '../../i18n'

const CHAT_URL = 'https://tawk.to/chat/6ae4c0b6fba718347285d203/1k66p1idb'

/**
 * Floating chat tab. It opens the shared Tawk.to conversation in a new tab,
 * so the storefront does not load a third-party widget on every page.
 */
export function ChatTab() {
  const { t } = useI18n()

  return (
    <a
      className="chat-tab"
      href={CHAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('chat.label')}
      title={t('chat.label')}
    >
      <span className="chat-tab__label">{t('chat.tab')}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      </svg>
    </a>
  )
}
