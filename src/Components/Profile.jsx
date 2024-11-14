import React from 'react'
import profilePic from '/pic.jpg'
import styles from './profile.module.css'

export default function Profile(props) {
  return (
    <div className={styles.container}>
        <img src={profilePic}></img>
        <h1>{props.name}</h1>
        <div className={styles.line}></div>
        <p>{props.carrer}</p>
        <div className={styles.line}></div>
        <p>{props.number}</p>
        <div className={styles.line}></div>
        <p>{props.email}</p>
        <div className={styles.line}></div>
        <button><a target='_blank' href={`https://${props.githubUrl}`}> Github </a></button>
        <button><a target='_blank' href={`https://${props.linkedinUrl}`}> Linkedin </a></button>
        <button><a target='_blank' href={`https://${props.instagramUrl}`}> Instagram </a></button>
    </div>
  )
}
