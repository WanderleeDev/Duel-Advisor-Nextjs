import Box from "@/shared/Containers/Box";
import Title from "@/shared/Typography/Title";
import LabelItemInfo from "@/shared/components/LabelItemInfo";
import { CardComplementaryData } from "../domain/Dto/Card.dto";

interface Props {
  data: CardComplementaryData;
}

export default function CardComplementaryInfo({ data }: Props) {
  return (
    <section className="flex flex-col gap-4">
      <Title
        level={2}
        className="font-semibold mb-3 text-2xl tracking-wider text-gray-100"
      >
        Card Details
      </Title>
      <Box bgVariant="black">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(data).map(([key, value]) => (
            <LabelItemInfo
              className="border-white/70 border-2"
              key={key}
              image="data:image/webp;base64,UklGRjwCAABXRUJQVlA4IDACAADQCwCdASoyAEkAPoU0lUelIyIhPNHIAKAQiUAYh7VGFGniEBrghZ1HfDG074ExWq8DTJ8QJcSB+b7Y677MpU5dQWvfZq3UOc8C8zOvwtjwI+TzMXOLIHZ/aN6DEt5GFmVkI9fAixuAAP69SOrO5bUG7tIAIJzr1PukZbwwvdfwPZ956xzMxEgm0Sm+qMyDYRlNjIHY9LOH/O1LXQUcSf5dFOVH7ACpPHnRaFij6w0pBEnll4Z5j4MEsFn6xP6lOghU3pAgderJoGjMvWG02x88FLiN0KJwpOEYNFk0X53Au4zZrVURIEnt8+iZBhob+sdLZ7tk9Yf2pINN2ezI67fwd7DjbU2dcCJ5FfBLXmWnwfPlqCw7v+/YLvv1KTxNC95Nyn6BSBkzOe0/v8e4aZgIrVHp/tcDBRNvSReDHILkL+YxrE0TwDfoGGt8x1Xj23SbNe8SkYjDgjcABtxSki/Lunv0Iup39XbjQz+jDjIv7YuwEgElcPkk6iUbqNjNzp4DeuRZ9FuH/5NnEb8/ZUK333ZXbPVuv6jp2RaAayRF+XIjylo8j3eChRABjksjHePXv8ygfs+NMvkHHp/6cV5s1eUbH8sUvncdtJX07+ZUMtaoR5J5VFt7uT/fNQa26PY7oJHa3ckF8yawP7PHU9Pw3Cdh8OetE4ebSL/oYjAcIgtLvMcANfM5ecMLiwHQ7+WE1/e/4B9q61KJVe6LuqSWq2xeCXiMwmKNGyNyuAAAAA=="
              title={`${value}`}
              label={key}
            />
          ))}
        </div>
      </Box>
    </section>
  );
}
