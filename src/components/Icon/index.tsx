import { IconName } from '@fortawesome/fontawesome-svg-core'
import { faBed, faAmbulance, faUsers, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

const iconMap: Partial<Record<IconName, any>> = {
  bed: faBed,
  ambulance: faAmbulance,
  users: faUsers,
  wallet: faWallet
}

type Props = {
  icon: IconName
}

export const Icon = ({ icon }: Props) => {
  return <FontAwesomeIcon icon={iconMap[icon]} className="icon" />
}
