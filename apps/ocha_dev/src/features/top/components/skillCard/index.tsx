import Image from 'next/image'

import styles from './style.module.css'

import { Badge } from '~/components/Base/Badge'
import type { Skill } from '~/entitie/skill'

type Props = {
	skill: Skill
}

export const SkillCard = ({ skill }: Props): React.ReactNode => {
	return (
		<div className={styles.skillCard}>
			<div className={styles.categories}>
				{skill.categorie.map((categorie) => (
					<Badge label={categorie} key={categorie} />
				))}
			</div>
			<div className={styles.skillDetail}>
				<Image
					src={skill.imageUrl}
					alt="React"
					width={70}
					height={70}
					objectFit="fill"
					className={styles.skillImage}
				/>
				<div>
					<h3 className={styles.skillName}>{skill.name}</h3>
					<div className={styles.genles}>
						{skill.genle.map((genle) => (
							<Badge label={genle} key={genle} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
