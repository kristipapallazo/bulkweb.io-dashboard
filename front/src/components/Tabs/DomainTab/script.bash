#!/bin/bash

read -p "Enter folder name: " folder_name

# Create folder if it doesn't exist
if [ -d "$folder_name" ]; then
  echo "Folder '$folder_name' already exists."
else
  mkdir "$folder_name"
  echo "Folder '$folder_name' created successfully."
fi

# Create the .tsx file with the component name same as folder name
echo "import { FC } from 'react';
import classes from './$folder_name.module.css';

interface DefaultReactProps {}

const $folder_name: FC<DefaultReactProps> = (props) => {
  const {} = props;

  return <div className={classes.cont}>$folder_name</div>;
};

export default $folder_name;" > "$folder_name/$folder_name.tsx"

# Create the .module.css file
echo ".cont {
}" > "$folder_name/$folder_name.module.css"

echo "$folder_name.tsx and $folder_name.module.css created inside '$folder_name'"
