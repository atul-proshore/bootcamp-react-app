"use client";
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface ImageContextType {
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
}

const ImageContext = createContext<ImageContextType>({
  image: "",
  setImage: () => {},
});

interface ImageProviderProps {
  children: ReactNode;
}

const ImageProvider = ({ children }: ImageProviderProps) => {
  const [image, setImage] = useState<string>("");

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageProvider };
