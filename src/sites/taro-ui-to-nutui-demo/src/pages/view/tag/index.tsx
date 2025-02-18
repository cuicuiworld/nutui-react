import React from 'react'
import { Tag } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

type ListItem = {
  name: string
  active: boolean
}

interface TagPageState {
  tagList: ListItem[]
  hollowTagList: ListItem[]
  solidTagList: ListItem[]
  hollowTagList2: ListItem[]
  solidTagList2: ListItem[]
}

export default class TagPage extends React.Component<{}, TagPageState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      tagList: [
        { name: 'tag-1', active: false },
        { name: 'tag-2', active: false },
        { name: 'tag-3', active: true },
        { name: 'tag-4', active: true },
      ],
      hollowTagList: [
        { name: '标签1', active: false },
        { name: '标签2', active: false },
        { name: '标签3', active: true },
        { name: '标签4', active: true },
      ],
      solidTagList: [
        { name: '标签1', active: false },
        { name: '标签2', active: false },
        { name: '标签3', active: true },
        { name: '标签4', active: true },
      ],
      hollowTagList2: [
        { name: '标签1', active: false },
        { name: '标签2', active: false },
        { name: '标签3', active: true },
        { name: '标签4', active: true },
      ],
      solidTagList2: [
        { name: '标签1', active: false },
        { name: '标签2', active: false },
        { name: '标签3', active: true },
        { name: '标签4', active: true },
      ],
    }
  }

  private onClick(data: ListItem): void {
    const { tagList } = this.state
    const findIndex = tagList.findIndex((item) => item.name === data.name)
    const active = !tagList[findIndex].active
    const content = `您点击的 tag 标签名是：${data.name}，点击前是否选中：${data.active}，点击后：${active}`

    tagList[findIndex].active = active
    this.setState({ tagList })

    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      alert(content)
    } else {
      Taro.showModal({ content, showCancel: false })
    }
  }

  private handleHollowClick(data: ListItem): void {
    const { hollowTagList } = this.state
    const findIndex = hollowTagList.findIndex((item) => item.name === data.name)

    hollowTagList[findIndex].active = !hollowTagList[findIndex].active
    this.setState({ hollowTagList })
  }

  private handleSolidClick(data: ListItem): void {
    const { solidTagList } = this.state
    const findIndex = solidTagList.findIndex((item) => item.name === data.name)

    solidTagList[findIndex].active = !solidTagList[findIndex].active
    this.setState({ solidTagList })
  }

  private handleHollowSmallClick(data: ListItem): void {
    const { hollowTagList2 } = this.state
    const findIndex = hollowTagList2.findIndex(
      (item) => item.name === data.name
    )

    hollowTagList2[findIndex].active = !hollowTagList2[findIndex].active
    this.setState({ hollowTagList2 })
  }

  private handleSolidSmallClick(data: ListItem): void {
    const { solidTagList2 } = this.state
    const findIndex = solidTagList2.findIndex((item) => item.name === data.name)

    solidTagList2[findIndex].active = !solidTagList2[findIndex].active
    this.setState({ solidTagList2 })
  }

  public render(): JSX.Element {
    return (
      <View className="page">
        {/* S Header */}
        <DocsHeader title="Tag 标签"></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className="doc-body">
          {/* 空心标签 */}
          <View className="panel">
            <View className="panel__title">空心标签</View>
            <View className="panel__content">
              <View className="example-item">
                {this.state.hollowTagList.map((item, index) => (
                  <View className="subitem" key={`at-tag-${index}`}>
                    <Tag
                      round={index % 2 === 0}
                      onClick={this.handleHollowClick.bind(this)}
                    >
                      标签
                    </Tag>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* 实心标签 */}
          <View className="panel">
            <View className="panel__title">实心标签</View>
            <View className="panel__content">
              <View className="example-item">
                {this.state.solidTagList.map((item, index) => (
                  <View className="subitem" key={`at-tag-${index}`}>
                    <Tag
                      type="primary"
                      round={index % 2 === 0}
                      onClick={this.handleSolidClick.bind(this)}
                    >
                      标签
                    </Tag>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* 点击事件 */}
          <View className="panel">
            <View className="panel__title">点击事件</View>
            <View className="panel__content">
              <View className="example-item">
                {this.state.tagList.map((item, index) => (
                  <View className="subitem" key={`at-tag-${index}`}>
                    <Tag
                      type="primary"
                      round={index % 2 === 0}
                      onClick={this.onClick.bind(this)}
                    >
                      tag-{index + 1}
                    </Tag>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* 不可点击态 */}
          <View className="panel">
            <View className="panel__title">
              不可点击态【nutui无disabled状态，不处理交互逻辑】
            </View>
            <View className="panel__content">
              <View className="example-item">
                <View className="subitem">
                  <Tag type="primary" round>
                    标签
                  </Tag>
                </View>
                <View className="subitem">
                  <Tag type="primary" round>
                    标签
                  </Tag>
                </View>
              </View>
            </View>
          </View>

          {/* 空心标签（小） */}
          <View className="panel">
            <View className="panel__title">
              空心标签（小）【nutui无size属性，可配置CSS变量】
            </View>
            <View className="panel__content">
              <View className="example-item">
                {this.state.hollowTagList2.map((item, index) => (
                  <View className="subitem" key={`at-tag-${index}`}>
                    <Tag
                      round={index % 2 === 0}
                      plain
                      onClick={this.handleHollowSmallClick.bind(this)}
                    >
                      标签
                    </Tag>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* 实心标签（小） */}
          <View className="panel">
            <View className="panel__title">实心标签（小）</View>
            <View className="panel__content">
              <View className="example-item">
                {this.state.solidTagList2.map((item, index) => (
                  <View className="subitem" key={`at-tag-${index}`}>
                    <Tag
                      type="primary"
                      round={index % 2 === 0}
                      onClick={this.handleSolidSmallClick.bind(this)}
                    >
                      标签
                    </Tag>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* 不可点击态（小） */}
          <View className="panel">
            <View className="panel__title">不可点击态（小）</View>
            <View className="panel__content">
              <View className="example-item">
                <View className="subitem">
                  <Tag
                    type="primary"
                    round
                    color="#F7F7F7"
                    textColor={`rgba(102, 102, 102, 0.5)`}
                  >
                    标签
                  </Tag>
                </View>
                <View className="subitem">
                  <Tag
                    type="primary"
                    color="#F7F7F7"
                    textColor={`rgba(102, 102, 102, 0.5)`}
                  >
                    标签
                  </Tag>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
