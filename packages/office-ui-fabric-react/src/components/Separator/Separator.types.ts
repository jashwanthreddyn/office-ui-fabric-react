import * as React from 'react';
import { IStyleFunctionOrObject } from '../../Utilities';
import { IStyle, ITheme } from '../../Styling';

export interface ISeparator {}

export interface ISeparatorProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Theme (provided through customization.)
   */
  theme?: ITheme;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<ISeparatorStyleProps, ISeparatorStyles>;

  /**
   * Whether the element is a vertical separator.
   */
  vertical?: boolean;

  /**
   * Where the content should be aligned in the separator.
   * @defaultValue 'center'
   */
  alignContent?: 'start' | 'center' | 'end';
}

export type ISeparatorStyleProps = Required<Pick<ISeparatorProps, 'theme'>> &
  Pick<ISeparatorProps, 'className' | 'alignContent' | 'vertical'>;

export interface ISeparatorStyles {
  /**
   * Style for the root element
   */
  root: IStyle;

  /**
   * Style for the content
   */
  content: IStyle;
}
