import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Box,
  Icon,
  Button,
} from "@chakra-ui/react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useCart } from "../store/store";
import { clearCartAction } from "../store/actions";

const SuccessPayment = ({ isOpen, onClose }) => {
  const { dispatch } = useCart();
  const onPaymentButtonClick = () => {
    dispatch(clearCartAction());
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onPaymentButtonClick} size="sm">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Box py={3}>
            <Box display="flex" justifyContent="center">
              <Icon as={BsFillPatchCheckFill} w={6} h={6} color="green.300" />
            </Box>
            <Box
              fontSize="1.2rem"
              fontWeight={600}
              display="flex"
              alignItems="center"
              textAlign="center"
              mb={3}
            >
              Your Payment was successful. Thank you for you'r shopping.
            </Box>
            <Button
              bg="red.500"
              color="white"
              variant="unstyled"
              onClick={onPaymentButtonClick}
              w="full"
            >
              OK
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SuccessPayment;
