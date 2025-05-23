# 机器学习

- notebookllm
  可以用它来对《你不知道的JavaScript》深入学习，搞搞思维导图、总结啥的
  可以用来做AI播客，创建两个智能体主持人进行播报

- modelscope
  阿里开源大模型社区
- Python Notebook
  后缀为 ipynb
  nlp 机器学习

- python
  nlp 第一语言
  js 也挺好

- 引入了pipeline 模块
  model中国第一大模型社区
  from modelscope.pipelines import pipeline
  from modelscope.utils.constant import Tasks

  semantic_cls = pipeline(Tasks.text_classification,'damo/nlp_structbert_sentiment-classification_chinese-base')
  打分 label分类
  result = semantic_cls(input='胡总吉他弹得真帅')