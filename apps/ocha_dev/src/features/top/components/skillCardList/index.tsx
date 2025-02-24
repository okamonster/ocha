import styles from './style.module.css'

import type { Skill } from '~/entitie/skill'
import { SkillCard } from '~/features/top/components/skillCard'

type Props = {
	skills: Array<Skill>
}

export const SkillCardList = ({ skills }: Props): React.ReactNode => {
	return (
		<div className={styles.skillCardList}>
			{skills.map((skill) => (
				<SkillCard skill={skill} key={skill.name} />
			))}
		</div>
	)
}
