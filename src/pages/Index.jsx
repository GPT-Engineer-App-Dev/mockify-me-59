// Complete the Index page component here
// Use chakra-ui
import { Button, Card } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Card backgroundColor="gray.100" padding={6}>
      <Button>
        Hello world! <FaPlus />
      </Button>
    </Card>
  );
};

export default Index;
