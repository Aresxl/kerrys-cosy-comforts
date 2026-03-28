import {Stack, Text, TextArea, Badge} from '@sanity/ui'
import type {StringInputProps} from 'sanity'
import {useState} from 'react'
import {set} from 'sanity'

type DescriptionCounterProps = StringInputProps & {
  maxLength: number
}

export function DescriptionCounterInput(props: any) {
  const {value = '', onChange, elementProps, schemaType} = props

  // Max length – you can hard-code or make it a prop later
  const maxLength = schemaType.options.maxLength ?? 100

  // Live count
  const currentLength = value.length
  const remaining = maxLength - currentLength
  const isNearLimit = remaining <= 20
  const isAtLimit = remaining <= 0

  return (
    <Stack space={3}>
      <TextArea
        {...elementProps}
        value={value}
        onChange={(e) => {
          const newValue = e.target.value
          // Only update if under or at limit (optional – can allow over)
          if (newValue.length <= maxLength) {
            onChange(set(newValue))
          }
        }}
        rows={4}
        placeholder="Tell customers why this dish is a must-try..."
        style={{resize: 'vertical'}}
      />

      <Text
        size={1}
        muted={remaining > 20}
        style={{
          textAlign: 'right',
          color: remaining <= 0 ? 'red' : remaining <= 20 ? 'orange' : 'inherit',
        }}
      >
        {currentLength} / {maxLength} characters
        {isNearLimit && !isAtLimit && ' (Almost at limit)'}
        {isAtLimit && ' (Too long)'}
      </Text>
    </Stack>
  )
}
