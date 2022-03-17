import React, { useEffect } from "react"
import { Text, Image } from "react-native"
import { AdMobInterstitial, AdMobBanner } from "expo-ads-admob"

import { Container } from "../../components/styled-components"

const Character = ({ route }) => {
    const { character } = route.params

    useEffect(() => {
        const initAds = async () => {
            AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/4411468910")
            await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true })
            await AdMobInterstitial.showAdAsync()
        }
        initAds()
    }, [])

    return (
        <Container>
            <Image
                source={{ uri: `${character?.thumbnail.path}.${character?.thumbnail.extension}` }}
                style={{ width: 100, height: 100 }}
            />
            <Text>{character?.name}</Text>
            <AdMobBanner
                adUnitID="ca-app-pub-3940256099942544/2934735716"
                servePersonalizedAds={false}
                bannerSize="banner"
            />
        </Container>
    )
}

export default Character
