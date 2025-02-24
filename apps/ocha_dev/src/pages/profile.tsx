import type { NextPage } from 'next'
import { useEffect } from 'react'

import { DeafaultHead } from '~/components/Head/DefaultHead'
import { DefaultLayout } from '~/components/Layout/DefaultLayout'
import { ProfileContainer } from '~/features/profile/components/profileContainer'
import { sendLogEvent } from '~/libs/analytics'

const ProfilePage: NextPage = () => {
	useEffect(() => {
		sendLogEvent('view_profile', undefined)
	}, [])

	return (
		<DefaultLayout>
			<DeafaultHead
				title="お茶.dev"
				description="お茶/岡本和輝のポートフォリオ"
				ogpImage="https://www.xn--t8jy01w.dev/images/ogp.png"
				path="profile"
			/>
			<ProfileContainer />
		</DefaultLayout>
	)
}

export default ProfilePage
