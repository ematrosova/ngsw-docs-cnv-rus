---
sidebar_position: 2
sidebar_label: Загрузить файлы
---

# Загрузить файлы

Сначала выберите файлы, для которых Вы хотите провести анализ CNV. Genomenal в данном пайплайне поддерживает форматы FASTQ и BAM.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip Файлы образцов можно загрузить:

<Tabs
  defaultValue="pc"
  values={[
    {label: 'С компьютера', value: 'pc'},
    {label: 'С серверов FTP, HTTP или Яндекс Диск', value: 'url'},
    {label: 'Из базы NCBI SRA', value: 'sra'}]}>
  <TabItem value="pc"><p align="center">Для загрузки перетащите файлы или папку, содержащую файлы, в окно или нажмите на него, чтобы открыть диспетчер файлов:<br />
  	<img src={require('/img/rus/9-drag-drop-box.png').default} width="300"/></p>
  </TabItem>
  <TabItem value="url"><p align="center">Для загрузки вставьте ссылку на файл или папку, содержащую файлы, на сервере в окно:<br />
  	<img src={require('/img/rus/10-12-url-box.png').default} width="250"/><br />
  и нажмите на кнопку:<br />
  	<img src={require('/img/rus/11-13-url_active.png').default} width="250"/></p>
  </TabItem>
  <TabItem value="sra"><p align="center">Для загрузки вставьте идентификатор образца формата SRRXXXXX из базы в окно:<br />
  	<img src={require('/img/rus/10-12-url-box.png').default} width="250"/><br />
  и нажмите на кнопку:<br />
  	<img src={require('/img/rus/11-13-url_active.png').default} width="250"/></p>
  </TabItem></Tabs>
:::

### Распознавание парных файлов

- Если Ваше секвенирование парное и пара файлов одного образца в формате FASTQ названа в [конвенции Illumina](https://support.illumina.com/help/BaseSpace_OLH_009008/Content/Source/Informatics/BS/NamingConvention_FASTQ-files-swBS.htm), то при добавлении файлы автоматически распознаются как парные:

<p align="center">
<img src={require('/img/rus/4-14-pair.png').default} width="300"/>
</p>

- Если пара распозналась неправильно, то Вы можете разбить ее на отдельные файлы, наведя курсор на пару и нажав на скрепку:

<p align="center">
<img src={require('/img/rus/5-15-unpair.png').default} width="300"/>
</p>

- Если автоматического распознавания файлов не произошло, то Вы можете спарить файлы вручную, потянув за скрепку и наведя файл на парный ему:

<p align="center">
<img src={require('/img/rus/6-16-force-pair.png').default} width="300"/>
</p>

:::info
Пока Вы заполняете остальные поля, файлы уже загружаются в систему. Даже если файлы не успели загрузиться полностью, можно начинать анализ образцов.
:::

:::danger Внимание!
Если Вы загружаете образцы с компьютера, а не по ссылке, то не закрывайте вкладку, где происходит загрузка файлов, пока она не завершится. Иначе загрузка прервется. После этапа загрузки Вы можете закрыть вкладку, браузер и выключить компьютер - дальнейший анализ не зависит от Вашего устройства.
:::

Перетащите карточку со спаренными файлами в соседнее поле под заголовком **“Составить набор образцов”**.
