import { Anchor, Button, H1, Paragraph, Separator, XStack, YStack } from '@yapster/ui'

export default  () => (
  <YStack>
    <Button size="$6" onPress={() => alert('hello world')}>Hello world</Button>
  </YStack>
)