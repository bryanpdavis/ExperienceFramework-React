import React from 'react'
import Checkbox from '../Checkbox';
import Button from '../Button';
import Input from '../Input';
import VideoPlayer from '../VideoPlayer';
import MenuItem from '../MenuItem';
import Select from '../Select';

export const Components = {
    button: Button,
    checkbox: Checkbox,
    input: Input,
<<<<<<< Updated upstream
    videoplayer: VideoPlayer
    menuitem: MenuItem,
    select: Select
  };

export default ExperienceBase => {

    // component does exist
  if (typeof Components[ExperienceBase.component] !== "undefined") {
    return React.createElement(Components[ExperienceBase.component], {
      key: ExperienceBase.id,
      props: ExperienceBase
    });
  }
  // component doesn't exist yet
  return React.createElement(
    () => <div>The component {ExperienceBase.component} has not been created yet.</div>,
    { key: ExperienceBase.id }
  );
}