import Button from '@components/Button'
import { ReactElement, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { IoMdClose } from 'react-icons/io'
import { ThreeDots } from 'react-loader-spinner'

interface Props {
  title: string
  actionLabel: string
  secondaryActionLabel?: string
  secondaryAction?: () => void
  body: ReactElement
  footer?: ReactElement
  disabled: boolean
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
}

function Modal({
  title,
  actionLabel,
  secondaryAction,
  secondaryActionLabel,
  body,
  footer,
  disabled,
  isOpen,
  onClose,
  onSubmit
}: Props) {
  const handleClose = useCallback(() => {
    if (disabled) return

    setTimeout(() => {
      onClose()
    }, 250)
  }, [onClose, disabled])

  const handleSubmit = useCallback(() => {
    if (disabled) return

    onSubmit()
  }, [onSubmit, disabled])

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return

    secondaryAction()
  }, [secondaryAction, disabled])

  const loader = (
    <div className="flex justify-center items-center gap-2">
      {actionLabel} <ThreeDots color="#ffffff" width={20} height={20} visible={true} />
    </div>
  )

  if (!isOpen) return null

  return createPortal(
    <div className="w-full h-full bg-black/60 fixed inset-0 z-50 flex justify-center items-center py-4 px-8">
      <div className="w-full max-h-full bg-white rounded-xl mx-auto overflow-y-scroll sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-2/4">
        <header className="flex justify-between items-center gap-8 py-4 px-6">
          <h4 className="text-lg font-bold">{title}</h4>
          <button
            type="button"
            onClick={handleClose}
            className="p-1 rounded-md hover:bg-gray-200/80"
          >
            <IoMdClose size={18} />
          </button>
        </header>

        <div className="w-full h-full mt-4">
          <div className="px-6 ">{body}</div>
        </div>

        <div className="flex justify-end items-center mt-8 py-4 px-6">
          {secondaryAction && secondaryActionLabel && (
            <Button text={secondaryActionLabel} onClick={handleSecondaryAction} />
          )}
          <Button text={disabled ? loader : actionLabel} onClick={handleSubmit} />
          <div className="mt-6">{footer}</div>
        </div>
      </div>
    </div>,
    document.getElementById('portal') ?? document.createDocumentFragment()
  )
}

export default Modal
