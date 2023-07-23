import { ReactNode } from "react"
import styles from './DarkLayouy.module.css'

type DarkLayoutProps = {
  children: ReactNode;
}

export const DarkLayout = ({ children }: DarkLayoutProps) => {
  
  return (
    <div className={styles.container}>{children}</div>
  )
}
