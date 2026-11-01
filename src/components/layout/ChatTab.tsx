import { useI18n } from '../../i18n'

const CHAT_URL = 'https://tawk.to/chat/6ae4c0b6fba718347285d203/1k66p1idb'

declare global {
  interface Window {
    Tawk_API?: {
      showWidget?: () => void
      maximize?: () => void
      hideWidget?: () => void
      onLoad?: () => void
      onChatMinimized?: () => void
      onChatHidden?: () => void
    }
  }
}

/**
 * The native Tawk launcher is hidden in index.html. This button is the
 * replacement icon; clicking it opens Tawk's own chat window, so the
 * conversation still appears in the position configured in the dashboard.
 */
export function ChatTab() {
  const { t } = useI18n()

  const openChat = () => {
    const api = window.Tawk_API

    if (api?.showWidget && api?.maximize) {
      api.showWidget()
      api.maximize()
      return
    }

    /* Tawk has not finished loading yet: open its direct chat as a fallback. */
    window.open(CHAT_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      type="button"
      className="chat-tab"
      onClick={openChat}
      aria-label={t('chat.label')}
      title={t('chat.label')}
    >
      <span className="chat-tab__label">{t('chat.tab')}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      </svg>
    </button>
  )
}
