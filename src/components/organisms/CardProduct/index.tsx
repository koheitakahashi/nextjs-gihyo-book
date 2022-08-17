import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Button from 'components/atoms/Button'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

const RemoveText = styled(Text)`
  cursor: ponter;
  &:hover {
    text-decoration: underline;
  }
`

interface CatrProductProps {
  id: number
  imageUrl: string
  title: string
  price: number
  onBuyButtonClick?: (id: number) => void
  onRemoveButtonClick?: (id: number) => void
}

const CartProduct = ({
  id,
  imageUrl,
  title,
  price,
  onBuyButtonClick,
  onRemoveButtonClick,
}: CatrProductProps) => {
  return (
    <Flex justifyContent="space-between">
      <Flex>
        <Box width="120px" height="120px">
          <Link href={`/product/${id}`} passHref>
            <a>
              <Image
                quality="85"
                src={imageUrl}
                alt={title}
                height={120}
                width={120}
                objectFit="cover"
              />
            </a>
          </Link>
        </Box>
        <Box padding={1}>
          <Flex
            height="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Text
                fontWeight="bold"
                variant="mediumLarge"
                marginTop={0}
                marginBottom={1}
                as="p"
              >
                {title}
              </Text>
              <Text margin={0} as="p">
                {price}円
              </Text>
            </Box>
            <Flex marginTop={{ base: 2, md: 0 }}>
              {/* 購入ボタン */}
              <Button
                width={{ base: '100px', md: '200px' }}
                onClick={() => onBuyButtonClick && onBuyButtonClick(id)}
              >
                購入
              </Button>
              {/* 削除ボタン(モバイル) */}
              <Button
                marginLeft={1}
                width={{ base: '100px', md: '200px' }}
                display={{ base: 'block', md: 'none' }}
                variant="danger"
                onClick={() => onRemoveButtonClick && onRemoveButtonClick(id)}
              >
                削除
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Box display={{ base: 'none', md: 'block' }}>
        <RemoveText
          color="danger"
          onClick={() => onRemoveButtonClick && onRemoveButtonClick(id)}
        >
          カートから削除
        </RemoveText>
      </Box>
    </Flex>
  )
}

export default CartProduct
